
const { traverse } = require('./util')

/**
 * 给我的ast树加上vue的标识符
 * @param {ast} ast 
 */
function transform(ast) {
  // 包括vue的特定template语法和所有静态标记
  let context = {
    headlers: new Set(['openBlock', 'createVnode']) // 用到的工具函数
  }
  ast.headlers = context.headlers
  // 只要是树形的结构,利用递归就是最方便的

  traverse(ast, context)
}


module.exports = transform