const parse = require('./utils/parse')
const transform = require('./utils/transform')
const generator = require('./utils/generator')
const {logToJSON} = require('./utils/util')

function compiler(template) {
  // 1.解析
  const ast = parse(template)
  logToJSON(ast)
  // 2.做一些标记?
  transform(ast)
  // 3.生成我想要的代码?
  const code = generator(ast)
  return code
}


/***
 * 测试用例的地方
 */
let templateStr = `<div id='app'>
<h1 @click='add' class='item' :id='count'>{{cont}}</h1>
<p>本人捡回</p>
</div>`

const a = compiler(templateStr)

// console.log(a)