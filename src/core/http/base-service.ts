import axios, {
type  AxiosInstance,
type  AxiosRequestConfig,
type  AxiosResponse,
type  InternalAxiosRequestConfig
} from 'axios'

export default abstract class BaseService {
  protected readonly service: AxiosInstance

  public constructor(config: AxiosRequestConfig) {
    this.service = axios.create(config)

    this._initializeRequestInterceptor()
    this._initializeResponseInterceptor()
  }

  private _initializeResponseInterceptor = () => {
    this.service.interceptors.response.use(this._handleResponse, this._handleError)
  }

  private _initializeRequestInterceptor = () => {
    this.service.interceptors.request.use(this._handleRequest, this._handleError)
  }

  protected abstract _handleRequest(config: InternalAxiosRequestConfig): InternalAxiosRequestConfig

  protected abstract _handleResponse(response: AxiosResponse): any

  protected _handleError(error: any) {
    return Promise.reject(error)
  }
}
