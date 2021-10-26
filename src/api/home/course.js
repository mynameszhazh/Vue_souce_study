import axios from 'axios'

export function getCourseData () {
  return axios.get('/api/course').then(res => res.data)
}
