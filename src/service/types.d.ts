

export type ResponceBehavior = (
    response: Response,
    isHideErrorCallback?: (statusCode: number) => boolean,
) => Promise<void>;

export type RequestBehavior = (
    request: TRequest & { method: TMethod },
) => Promise<void>;

export type TRequestOptions = {
  baseUrl?: string,
  isText?: boolean,
  isBlob?: boolean,
  isHideErrorCallback?: (statusCode: number) => boolean,
  credentials?: RequestCredentials,
}

export type TRequest = {
  path: string,
  body?: any,
  headers?: { [key: string]: string },
  options?: TRequestOptions
};

export type TMethod = 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'GET'

export interface IApiService {
  readonly ApiUrl: string;
  get<T>({ path, options, headers }: TRequest): Promise<T>;
  post<T>({ path, body, headers, options }: TRequest): Promise<T>;
  put<T>({ path, body, headers, options }: TRequest): Promise<T>;
  delete<T>({ path, body, headers, options }: TRequest): Promise<T>;
  patch<T>({ path, body, headers, options }: TRequest): Promise<T>;
  sendBeacon(url: string, body: any): void;
}