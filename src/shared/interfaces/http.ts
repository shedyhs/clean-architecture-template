export type HttpMethod =
  | 'get'
  | 'post'
  | 'put'
  | 'delete'
  | 'patch'
  | 'options';

export type HttpRequest = {
  params: any;
  query: any;
  body: any;
  headers: any;
  user: any;
};

export type HttpResponse = {
  statusCode: number;
  data: any;
};

export interface Http {
  on(
    method: HttpMethod,
    url: string,
    fn: (req: HttpRequest) => Promise<HttpResponse>,
  ): void;
  listen(port: number): void;
}
