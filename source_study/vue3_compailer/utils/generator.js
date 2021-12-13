function generator(ast) {
  const { headlers } = ast
  let code = `
  import {${[...headlers].map(v => v + ' as _' + v)}} from 'vue'\n
  export funciotn render(_ctx, _cache) {
    return (_openBlock(), ${ast.children.map(node => walk(node))})
  }
  `
  return code
  function walk(node) {
    switch (node.type) {
      case 'element':
        let { flag } = node
        let props = node.props.reduce((ret, p) => {
          if (flag.props) {
            // 属性是动态的
            ret.push(p.key + ':_ctx.' + p.val.replace(/['"]/g, ''))
          } else {
            ret.push(p.key + ':' + p.val)
          }
          return ret
        }, []).join(',') + '}'
        return `_createVnode('${node.tag}',
          [${node.children.map(n => walk(n))}],
          ${JSON.stringify(flag)}
        )`
      case 'text':
        if (node.static) {
          return '"' + node.val + '"'
        } else {
          return `_toDisplayString(_ctx.${node.val})`
        }
      case 'element':
    }
  }
}

module.exports = generator