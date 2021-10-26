import axios from 'axios';
import {Feature} from '@/type/index';
export function getHomeUserList() {
  return axios.get<Feature[]>('api/list')
}