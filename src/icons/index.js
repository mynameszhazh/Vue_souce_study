// webpack创建一个营svg为目录的上下文require函数
const req = require.context('./svg', false, /\.svg$/)
// keys会获取所有的svg文件, 之后用map来执行一下
req.keys().map(req)