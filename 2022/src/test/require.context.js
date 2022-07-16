const path = require('path')
const files = require.context('../views', false, /\.vue$/)
import Home from '../views/Home'
const modules = {}
files.keys().forEach(key => {
  const name = path.basename(key, '.vue')
  modules[name] = files(key).default || files(key)
})
console.log(modules)
console.log(Home)
// components:modules