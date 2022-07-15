module.exports = {
  root: true,
  env: {
    node: true
  },
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // 关闭组件命名规则
    'vue/multi-word-component-names': 'off',
  },
}