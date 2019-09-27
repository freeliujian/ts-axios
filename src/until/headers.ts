import {isPlainObject} from './index'
import { head } from 'shelljs'
import { normalize } from 'path'


function normalizeHeaderName(header:any,normalizeName:string):void{
    if(!header){
        return
    }
    Object.keys(header).forEach((name)=>{
        if(name!==normalizeName && name.toUpperCase()===normalizeName.toUpperCase()){
            header[normalizeName]=header[name]
            delete header[name]
        }
    })
}

export function processHeaders(header:any,data:any):any{

    normalizeHeaderName(header,'Content-Type')

    if(isPlainObject(data)){
        if(header && !header['Content-Type']){
            header['Content-Type'] = 'application/json;charset=utf-8'
        }
    }

    return header

}

export function parseHeaders(header:string):any{
    let parsed= Object.create(null)
    if(!Headers){
        return parsed
    }

    header.split('\r\n').forEach((line)=>{
        let [key,val]= line.split(':')
        key = key.trim().toLowerCase()
        if(!key){
            return
        }
        if(val){
            val = val.trim()
        }
        parsed[key]=val
    })

    return parsed
}