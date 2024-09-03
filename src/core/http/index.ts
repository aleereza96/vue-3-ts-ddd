import { type AxiosResponse, type InternalAxiosRequestConfig } from 'axios'
import BaseService from './base-service'
import { Config } from '../config'

const config = Config.getInstance()

export class Http extends BaseService {
  constructor() {
    super({ baseURL: config.getProperty('VITE_API_BASE_URL') })
  }

  protected _handleRequest(
    config: InternalAxiosRequestConfig<any>
  ): InternalAxiosRequestConfig<any> {
    return config
  }

  protected _handleResponse(response: AxiosResponse<any, any>) {
    return response.data
  }

  _handleError(error: any) {
    console.error('Something went wrong!', error)
    return Promise.reject(error)
  }

  public get(url: string, params?: any): any {
    return this.service.get(`/${url}`, { params })
  }

  public post(url: string, body: any): any {
    return this.service.post(`/${url}`, body)
  }

  public put(url: string, body: any): any {
    return this.service.put(`/${url}`, body)
  }

  public delete(url: string): any {
    return this.service.delete(`/${url}`)
  }
}
