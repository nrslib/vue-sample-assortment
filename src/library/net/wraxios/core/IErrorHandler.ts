export interface IErrorHandler {
    (response: IErrorResponse): void;
}

export interface IErrorResponse {
    errors: ErrorContainer[]
}

interface ErrorContainer {
    message: string;
    item: any;
    code: any;
}
