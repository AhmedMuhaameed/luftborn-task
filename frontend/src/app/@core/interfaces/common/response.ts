export interface ResponseDTO<T> {
    message?: string;
    data: T;
    isSuccess: boolean;
}