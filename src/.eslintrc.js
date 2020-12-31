module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  globals: {
    // 根据不同的项目环境自行配置
  },
  extends: ['plugin:vue/recommended', 'eslint:recommended'],
  rules: {
    'no-var': 2,
    semi: 2,
    'no-alert': 2, //禁用alert
  },
}
