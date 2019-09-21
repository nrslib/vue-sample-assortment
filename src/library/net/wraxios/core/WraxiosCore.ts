import axios, {AxiosError, AxiosRequestConfig, Method} from 'axios';
import {
    IUnexpectedErrorHandler,
    IUnexpectedErrorHandlerObject,
    UnexpectedErrorHandler
} from "@/library/net/wraxios/core/IUnexpectedErrorHandler";
import {WraxiosResponse} from "@/library/net/wraxios/core/WraxiosResponse";
import {IErrorHandler, IErrorResponse} from "@/library/net/wraxios/core/IErrorHandler";
import router from "@/router";
import i18n from '@/plugins/i18n';
import ServiceLocator from "@/library/service/ServiceLocator";
import {MessageType} from "@/library/service/message/MessageType";
import {RawLocation, Route} from "vue-router";

export default class WraxiosCore {
    private queueNum: number = 0;

    public notifyRouteChanged() {
        if (this.queueNum === Number.MAX_SAFE_INTEGER) {
            this.queueNum = 0;
        }
        this.queueNum++;
    }

    public request<T>(
        method: Method,
        url: string,
        data?: any,
        aParams?: {
            onError?: IErrorHandler,
            onUnexpectedError?: UnexpectedErrorHandler<T>,
            config?: AxiosRequestConfig
        }): Promise<WraxiosResponse<T>> {
        const params = aParams === null || aParams === void 0 ? {} : aParams!;
        const requestConfig: AxiosRequestConfig = !params || !params.config ? {} : params.config;
        requestConfig.method = method;
        requestConfig.url = url;
        requestConfig.data = data;

        const errorHandler = this.selectErrorHandler(params.onError);
        const calledQueueNum = this.queueNum;
        return new Promise<WraxiosResponse<T>>((resolve, reject) => {
            axios.request<T>(requestConfig)
                .then(res => {
                    if (calledQueueNum !== this.queueNum) {
                        return;
                    }

                    const response = new WraxiosResponse(res.data);
                    resolve(response);
                })
                .catch((e: AxiosError) => {
                    if (calledQueueNum !== this.queueNum) {
                        return;
                    }

                    const optResponse = e.response;
                    if (!optResponse) {
                        router.push({name: 'error-server'});
                        reject();
                        return;
                    }

                    const response = optResponse!;
                    if (response.status === 400) {
                        const clientErrorResponse = this.makeResponse(response.data);
                        errorHandler(clientErrorResponse);
                    } else {
                        const unExpectedErrorHandler = this.selectUnexpectedErrorHandler(errorHandler, params.onUnexpectedError);
                        unExpectedErrorHandler(resolve, reject, e);
                    }
                });
        });
    }

    public get<T>(
        url: string,
        params?: {
            onError?: IErrorHandler,
            onUnexpectedError?: UnexpectedErrorHandler<T>,
            config?: AxiosRequestConfig
        }): Promise<WraxiosResponse<T>> {
        return this.request('get', url, null, params);
    }

    public post<T>(
        url: string,
        data?: any,
        params?: {
            onError?: IErrorHandler,
            onUnexpectedError?: UnexpectedErrorHandler<T>,
            config?: AxiosRequestConfig
        }): Promise<WraxiosResponse<T>> {
        return this.request('post', url, data, params);
    }

    private makeResponse<T>(data: any): IErrorResponse {
        const response = data as IErrorResponse;
        if (!!response && !!response.errors) {
            for (const error of response.errors) {
                const errorMessageKey = 'error.api.' + error.code;
                const errorMessage = i18n.t(errorMessageKey).toString();
                if (!errorMessage || errorMessage === errorMessageKey) {
                    error.message = i18n.t('common.wraxios.unregistered-error-message', { errorCode : "code:\"" + error.code + "\""}).toString();
                } else {
                    error.message = errorMessage;
                }
            }
        }

        return data;
    }

    private selectErrorHandler<T>(handler?: IErrorHandler): IErrorHandler {
        if (handler === null || handler === void 0) {
            return notifyErrorToMessage;
        }

        return handler;
    }

    private selectUnexpectedErrorHandler<T>(
        onError: IErrorHandler,
        handler?: UnexpectedErrorHandler<T>,
    ): IUnexpectedErrorHandler {
        if (handler === null || handler === void 9) {
            return notifyMessageWhenUnexpectedErrorHandler;
        }

        if (this.isUnexpectedHandlerObject(handler)) {
            const tempHandler = (resolve: (value?: WraxiosResponse<T> | PromiseLike<WraxiosResponse<T>>) => void, reject: (reason?: any) => void, e: AxiosError) => handler.handle(resolve, reject, e);
            return tempHandler as IUnexpectedErrorHandler;
        }

        return <IUnexpectedErrorHandler>handler;
    }

    private isUnexpectedHandlerObject<T>(arg: any): arg is IUnexpectedErrorHandlerObject<T> {
        const casted = arg as IUnexpectedErrorHandlerObject<T>;
        return casted.handle !== void 0;
    }
}

const notifyErrorToMessage: IErrorHandler = (response: IErrorResponse) => {
    response.errors
        .map((x) => x.message)
        .forEach((message) => ServiceLocator.instance.messageService.addMessage(MessageType.Error, message));
};

export function pushNextWithError(response: IErrorResponse, location: RawLocation) {
    notifyeOnNextRoute(response);
    router.push(location);
}

/**
 * Show message on next route
 * @param response
 */
export function notifyeOnNextRoute(response: IErrorResponse) {
    response.errors
        .map(x => x.message)
        .forEach(message => ServiceLocator.instance.messageService.reserve(MessageType.Error, message));

}

const notifyMessageWhenUnexpectedErrorHandler: IUnexpectedErrorHandler = <T>(
    resolve: (value?: WraxiosResponse<T> | PromiseLike<WraxiosResponse<T>>) => void,
    reject: (reason?: any) => void,
    error: AxiosError<T>
) => {
    const optResponse = error.response;
    if (!optResponse) {
        router.push({name: 'error-server'});
        reject();
        return;
    }

    const response = optResponse!;
    const statusCode = response.status;
    switch (statusCode) {
        case 401:
            router.push({name: 'login'});
            break;
        case 403:
            const message = i18n.t('common.wraxios.role-changed').toString();
            ServiceLocator.instance.messageService.reserve(MessageType.Info, message);
            router.push({name: 'top'});
            break;
        default:
            router.push({name: 'error-server'});
            break;
    }
};
