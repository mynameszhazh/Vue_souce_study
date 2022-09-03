import axios from 'axios'

export function getFeature<T>(params) {
  return axios.get<T>('', params)
}