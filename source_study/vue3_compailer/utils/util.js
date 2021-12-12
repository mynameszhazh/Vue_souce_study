/**
 * 遍历我传入进来的字符串,标记每一个地方的处理方式
 * @param {string} template 
 */
function tokenizer(input) {
  // 返回一个数组
  // [{value:'div',type:'tagstart'}, {type: props}]
  let token = []
  let type = ''
  let val = ""
  for (let i = 0; i < input.length; i++) {
    let ch = input[i]
    if (ch == '<') {
      push()
      if (input[i + 1] == '/') {
        type = 'tagend' // </ 结束标签
      } else {
        type = 'tagstart' // < 开始标签
      }
    }
    if (ch == '>') {
      // 标签结束
      push()
      type = 'text'
      continue
    } else if (/[\s]/.test(ch)) {
      // 处理字符串
      push()
      type = 'props'
      continue
    }
    val += ch
  }
  return token
  function push() {
    if (val) {
      if (type == 'tagstart') val = val.slice(1) // 过滤<
      if (type == 'tagend') val = val.slice(2) // 过滤</
      token.push({
        type, val
      })
      val = ''
    }
  }
}

/**
 *  将我的对象数组进行一个打印展示
 * @param {string} data 
 */
function logToJSON(data) {
  // 这样的骚操作还是刚刚才知道
  console.log(JSON.stringify(data, null, 2))
}

/**
 * 递归处理我的ast(parse之后)的树
 * @param {ast} ast 
 * @param {上下文工具函数} context 
 */
function traverse(ast, context) {
  // console.log(ast.type)
  switch (ast.type) {
    case 'root':
      context.headlers.add('createBlock')
    case 'element':
      // props 在这里element里面
      // div 或者别的html元素
      // 重点是做了两个内容
      // 1.标记vue的一些语法
      // 2.一些上面class props,这些如果是一个静态的属性酒桌上一个标记,方便后续的diff 和 vdom 的处理
      ast.children.forEach(node => {
        // 递归遍历处理?
        traverse(node, context)
      })
      // 判断ast的是否静态, 本来是一个二进制操作进行的,这里使用一个对象进行flag处理
      ast.flag = {
        props: false,
        class: false,
        event: false
      } // 默认都是一个静态的操作
      ast.props = ast.props.map(prop => {
        const { key, val } = prop
        if (key[0] == '@') {
          ast.flag.event = true
          return {
            key:'on'+key[1].toUpperCase()+ key.slice(2), //@Click => onclick
            val
          }
        }
        if (key[0] == ':') {
          ast.flag.props = true
          return {
            key: key.slice(1),
            val
          }
        } 
        if (key[0] == 'v-') {
          // 这个就是v-model这样的操作了,里面的操作真的有点多了,羊村长也是说过那个东西的只是我对于那个东西的理解还是提留在一个看的懂这样的上面
          // ast.
        }
        return {...prop, static: true}
      })
    case 'text':
      // 文本中有{{}}就是一个动态,没有就是静态
      let re = /\{\{(.*)\}\}/g
      if (re.test(ast.val)) {
        ast.static = false
        context.headlers.add('toDisplayString')
        ast.val = ast.val.replace(re, function (s0, s1) {
          return s1
        })
      } else {
        // 如果是标记了这个就表示之后vue不需要动态编译这里
        ast.static = true
      }
      break;
  }
}

module.exports = {
  tokenizer,
  logToJSON,
  traverse
}