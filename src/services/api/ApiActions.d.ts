import { AnyAction } from "redux"
import { RequestActionMeta } from "@redux-requests/core"

export interface IApiRequest {
  url: string
  cms: boolean
  regionId?: string
  method?: string
  body?: any
  headers?: { [k: string]: string }
  responseType?: null | "arraybuffer" | "blob" | "formData" | "json" | "text"
  redirect?: "manual"
}

type ErrorHandler = (status: number) => string

export interface IMeta {
  errorMessage?: string
  errorHandler?: ErrorHandler
  errorAutoClose?: boolean
  no404error?: boolean
  isReloading?: boolean
}

export interface IApiAction {
  type: string
  request: IApiRequest | IApiRequest[]
  meta?: RequestActionMeta
}
export interface IApiResponse<T extends any> {
  data: T
  headers: Headers
  status: number
}

export interface IApiActionSuccess<T = undefined> extends AnyAction {
  type: string
  meta: {
    requestAction?: IApiRequest
    [k: string]: any
  }
  response: IApiResponse<T>
}

export interface IApiActionError extends AnyAction {
  type: string
  meta: {
    request: IApiRequest
  }
  error: Response
}