import {AxiosRequestConfig,AxiosPromise, AxiosResponse} from '../types/index'
import xhr from './xhr'
import {buildURL} from '../until/url'
import {transformRequest, transformResponse} from '../until/data.js'
import { processHeaders} from '../until/headers'


export default function axios (config:AxiosRequestConfig):AxiosPromise{
    processConfig(config)
    return xhr(config).then((res)=>{
        return  transformResponseData(res)
    })
}

function processConfig(config:AxiosRequestConfig):void{
    config.url = transformURL(config)
    config.headers = transformRequestHeader(config)
    config.data =transformRequestData(config)
}

function transformURL(config:AxiosRequestConfig):string{
    const {url,params} = config

    return buildURL(url!,params)
}

function transformRequestData(config:AxiosRequestConfig):any{
    return transformRequest(config.data)
}

function transformRequestHeader(config:AxiosRequestConfig):any{
    const {headers={},data}=config

    return processHeaders(headers,data)
}


function transformResponseData(res:AxiosResponse):AxiosResponse{
    return  res.data = transformResponse(res.data)
}

