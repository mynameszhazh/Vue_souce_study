import axios from 'axios'
import { Feature } from '../types/feature.d'

export function getFeature(params = {}) {
  return axios.get<Feature[]>('/api/feature', params)
}