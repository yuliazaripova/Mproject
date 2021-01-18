import { RequestAction } from "@redux-requests/core"
import { IApiRequest } from "./ApiActions"


function makeRequest({
    request,
    baseUrl,
  }: {
    request: IApiRequest
    baseUrl: string
  }) {
    const url = request.url.includes("http") ? request.url : `${baseUrl}${request.url}`
  
    return {
      ...request,
      url,
    }
  }

export function onRequest(
    request: IApiRequest | IApiRequest[],
    action: RequestAction,
  ) {
  
    if (Array.isArray(request)) {
      return request.map((req) => {
        return makeSingleRequest( req )
      })
    }
    return makeSingleRequest( request )
  }
  
  function makeSingleRequest(
    request: IApiRequest,
  ) {
      return makeRequest({ request, baseUrl: 'http://35.231.209.61/?rt=' })
    }

