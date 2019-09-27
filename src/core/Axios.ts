import {AxiosPromise, AxiosRequestConfig, Method} from '../types'
import dispatchRequest from './dispatchRequest'


export default class Axios {
    request(config:AxiosRequestConfig):AxiosPromise{
        return dispatchRequest(config)
    }


    get(url:string,config?:AxiosRequestConfig):AxiosPromise{
        return this._requestMethodWidthoutData('get',url,config)
    }

    delete(url:string,config?:AxiosRequestConfig):AxiosPromise{
        return this._requestMethodWidthoutData('delete',url,config)
    }

    head(url:string,config?:AxiosRequestConfig):AxiosPromise{
        return this._requestMethodWidthoutData('head',url,config)
    }

    options(url:string,config?:AxiosRequestConfig):AxiosPromise{
        return this._requestMethodWidthoutData('options',url,config)
    }

    post(url:string,data?:any,config?:AxiosRequestConfig):AxiosPromise{
        return this._requestMethodWidthData('post',url,config,data)
    }

    put(url:string,data?:any,config?:AxiosRequestConfig):AxiosPromise{
        return this._requestMethodWidthData('put',url,config,data)
    }

    patch(url:string,data?:any,config?:AxiosRequestConfig):AxiosPromise{
        return this._requestMethodWidthData('patch',url,config,data)
    }

    _requestMethodWidthData (method:Method,url:string,config?:AxiosRequestConfig,data?:any){
        return this.request(Object.assign(config ||{},{
            method,
            url,
            data
        }))
    }


    _requestMethodWidthoutData (method:Method,url:string,config?:AxiosRequestConfig){
        return this.request(Object.assign(config ||{},{
            method,
            url
        }))
    }
}