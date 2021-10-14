const path = require('path')
const favicon = require('serve-favicon')

const Vue = require('vue')
const server = require('express')()
const renderer = require('vue-server-renderer').createRenderer()


// 他会直接过滤掉我的favicon 就是一个防止干扰的操作，我这个use之前拦截我的这个方法很好使用，也没有说明难度就这样吧 
server.use(favicon(path.join(__dirname, '../../public', 'favicon.ico')))

server.get('*', (req, res) => {
  const app = new Vue({
    data: {
      url: req.url
    },
    template: `<div>The visited URL is: {{ url }}</div>`
  })

  // 这个东西确实可以让人有点寻味的意思
  renderer.renderToString(app, (err, html) => {
    if (err) {
      res.status(500).end('Internal Server Error')
      return
    }
    res.end(`
      <!DOCTYPE html>
      <html lang="en">
        <head><title>Hello</title></head>
        <body>${html}</body>
      </html>
    `)
  })
})

server.listen(8080)