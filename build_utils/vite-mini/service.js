const Koa = require('koa')
const fs = require('fs')
const path = require('path')
// const response = require('koa/lib/response')
const app = new Koa()

// 处理 import {createApp} from 'vue'
function reWriteImport(content) {
  // 我也不知道为什么([^'"]+) 这个就是全匹配吗?
  return content.replace(/from ['|"]([^'"]+)['|"]/g, function(s0,s1) {
    // console.log(s0, s1)
    if(s0[0] !== '.' && s1[1] !== '/') {
      return `from '/@module/${s1}'`
    } else {
      return `from '${s1}'`
    }
  })
}


app.use( async(ctx) => {
  const {request: {url}} = ctx
  // console.log((url))
  if(url == '/') {
    ctx.type = 'text/html'
    ctx.body = fs.readFileSync('./index.html')
  } else if(url.endsWith('.js')) {
    const p = path.resolve(__dirname, url.slice(1))
    ctx.type = 'application/javascript'
    ctx.body= reWriteImport(fs.readFileSync(p,'utf-8'))
  } else if(url.startsWith('/@module/')) {
    const prefix = path.resolve(__dirname, '../../node_modules', url.replace('/@module/', ''))
    // 注意这个是在
    const module = require(path.resolve( prefix +'/package.json')).module
    const p = path.resolve(prefix,module)
    const ret = fs.readFileSync(p, 'utf-8')
    ctx.type = 'application/javascript;'
    // console.log(ret)
    // 嵌套操作,有点那个味道在这里了
    ctx.body =reWriteImport( ret)
    console.log(p)
  }
})

const port = 3001
app.listen(port, () => {
  console.log('service running.... at', port)
})