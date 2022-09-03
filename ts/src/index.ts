import {getFeature} from './api/index'

getFeature().then(res => {
  let list = res.data
  for(let i=0; i<list.length; i++) {
    console.log(list[i].id)
    console.log(list[i].name)
  }
})