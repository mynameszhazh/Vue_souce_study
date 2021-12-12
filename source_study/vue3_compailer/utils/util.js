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

module.exports = {
  tokenizer,
  logToJSON
}