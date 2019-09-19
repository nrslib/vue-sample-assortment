import {WraxiosResponse} from "@/library/net/wraxios/core/WraxiosResponse";
import {AxiosError} from "axios";

export interface IUnexpectedErrorHandler {
    <T>(
        resolve: (value?: WraxiosResponse<T> | PromiseLike<WraxiosResponse<T>>) => void,
        reject: (reason?: any) => void,
        error: AxiosError
    ): void;
}

export interface IUnexpectedErrorHandlerObject<T> {
    handle(
        resolve: (value?: WraxiosResponse<T> | PromiseLike<WraxiosResponse<T>>) => void,
        reject: (reason?: any) => void,
        error: AxiosError
    ): void;
}

export type UnexpectedErrorHandler<T> = IUnexpectedErrorHandler | IUnexpectedErrorHandlerObject<T>;
