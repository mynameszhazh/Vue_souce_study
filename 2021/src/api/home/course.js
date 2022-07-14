import axios from 'axios'
// export function getCourseData () {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve([{ name: 'xjh', age: 2, sex: '男', pirce: '12' }, { name: 'xjh2', age: 12, sex: '女', pirce: '120' }])
//     }, 2000)
//   })
// }

export function getCourseData () {
  return axios.get('/api/course').then(res => res.data)
}
