export enum HttpStatusCode{
  noContent = 204,
  unauthorized = 400
}

export type HttpResponse = {
  statusCode: number
  body?: any
}
