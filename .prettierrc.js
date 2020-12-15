module.exports = {
  printWidth: 120, // 超过最大值换行
  semi: false, // 句尾添加分号
  singleQuote: true, // 使用单引号代替双引号
  trailingComma: 'es5', // 在ES5中有效的结尾逗号（对象，数组等）
  bracketSpacing: true, // 在对象，数组括号与文字之间加空格 "{ foo: bar }"
  jsxBracketSameLine: true, // 在jsx中把'>' 是否单独放一行
  jsxSingleQuote: false, // 在jsx中使用单引号代替双引号
  insertPragma: false,
  tabWidth: 2, // 缩进字节数
  arrowParens: 'avoid', // (x) => {} 箭头函数参数只有一个时是否要有小括号。avoid：省略括号
  useTabs: false,
  endOfLine: 'auto',
};
