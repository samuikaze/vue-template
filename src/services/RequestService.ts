import type { StringKeyObject } from '@/abstracts/GlobalTypes'
import axios, { type AxiosResponse } from 'axios'

export const RequestService = {
  /**
   * 發起 GET 請求
   * @param uri 目標網址
   * @param queries 查詢字串
   * @param headers 標頭資料
   * @returns AxiosGet Promise 物件
   */
  get: function <TResponse>(
    uri: string,
    queries?: StringKeyObject<any>,
    headers?: StringKeyObject<string>,
  ): Promise<AxiosResponse<TResponse>> {
    return axios.get<TResponse>(uri, {
      params: queries,
      headers: headers,
    })
  },

  /**
   * 發起 POST 請求
   * @param uri 目標網址
   * @param body 請求主體
   * @param queries 查詢字串
   * @param headers 標頭資料
   * @returns AxiosPost Promise 物件
   */
  post: function <TBody extends StringKeyObject<any>, TResponse>(
    uri: string,
    body?: TBody,
    queries?: StringKeyObject<any>,
    headers?: StringKeyObject<string>,
  ): Promise<AxiosResponse<TResponse>> {
    return axios.post<TResponse>(uri, body, {
      params: queries,
      headers: headers,
    })
  },

  /**
   * 發起 PUT 請求
   * @param uri 目標網址
   * @param body 請求主體
   * @param queries 查詢字串
   * @param headers 標頭資料
   * @returns AxiosPut Promise 物件
   */
  put: function <TBody extends StringKeyObject<any>, TResponse>(
    uri: string,
    body?: TBody,
    queries?: StringKeyObject<any>,
    headers?: StringKeyObject<string>,
  ): Promise<AxiosResponse<TResponse>> {
    return axios.put<TResponse>(uri, body, {
      params: queries,
      headers: headers,
    })
  },

  /**
   * 發起 PATCH 請求
   * @param uri 目標網址
   * @param body 請求主體
   * @param queries 查詢字串
   * @param headers 標頭資料
   * @returns AxiosPatch Promise 物件
   */
  patch: function <TBody extends StringKeyObject<any>, TResponse>(
    uri: string,
    body?: TBody,
    queries?: StringKeyObject<any>,
    headers?: StringKeyObject<string>,
  ): Promise<AxiosResponse<TResponse>> {
    return axios.patch<TResponse>(uri, body, {
      params: queries,
      headers: headers,
    })
  },

  /**
   * 發起 DELETE 請求
   * @param uri 目標網址
   * @param queries 查詢字串
   * @param headers 標頭資料
   * @returns AxiosDelete Promise 物件
   */
  delete: function <TResponse>(
    uri: string,
    queries?: StringKeyObject<any>,
    headers?: StringKeyObject<string>,
  ): Promise<AxiosResponse<TResponse>> {
    return axios.delete<TResponse>(uri, {
      params: queries,
      headers: headers,
    })
  },

  /**
   * 發起 OPTIONS 請求
   * @param uri 目標網址
   * @param queries 查詢字串
   * @param headers 標頭資料
   * @returns AxiosOptions Promise 物件
   */
  options: function <TResponse>(
    uri: string,
    queries?: StringKeyObject<any>,
    headers?: StringKeyObject<string>,
  ): Promise<AxiosResponse<TResponse>> {
    return axios.options<TResponse>(uri, {
      params: queries,
      headers: headers,
    })
  },
}
