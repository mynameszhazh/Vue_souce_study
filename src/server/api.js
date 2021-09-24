const express = require('express')
const app = express()
app.get('/api/course', (req, res) => {
  setTimeout(() => {
    res.json([{ name: 'xjh', age: 2, sex: '男', pirce: '12' }, { name: 'xjh2', age: 12, sex: '女', pirce: '120' }])
  }, 1000)
})
// 这样就是一个服务需要一i邪恶数据的效果了，也可以进行一个简单的操作也是说不定的一些好的操作这样
app.listen(3000)
