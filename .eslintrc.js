module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
  },
  env: {
    'shared-node-browser': true,
  },
  extends: [
    'eslint:recommended',
    'airbnb-base',
  ],
  rules: {

    // 正式环境禁用 debugger
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

    // 允许使用 console
    'no-console': ['off'],

    // 限制一行代码最大字符数
    'max-len': ['off'],

    // 要求文件末尾存在空行
    'eol-last': ['error', 'always'],

    // https://cn.eslint.org/docs/rules/valid-jsdoc
    // 若代码中使用 JSDoc 时，JSDoc 必须按照特性的书写方式来写
    'valid-jsdoc': [
      'error',
      {
        prefer: { // 强制使用一致的文档标签
          arg: 'param',
          argument: 'param',
          class: 'constructor',
          returns: 'return',
          virtual: 'abstract',
        },
        preferType: { // 强制使用一致的类型字符串
          Boolean: 'Boolean',
          Number: 'Number',
          object: 'Object',
          String: 'String',
        },
        requireReturn: false, // 允许不使用返回标签
        requireReturnType: true, // 返回标签中必须有类型
        matchDescription: '.+', // 要求必须有描述
        requireParamDescription: false, // 允许参数标签不带描述
        requireReturnDescription: false, // 允许返回标签不带描述
      }
    ],

    // 注释周围空行规则
    'lines-around-comment': [
      'error',
      {
        'beforeBlockComment': true, // 要求块级注释之前有一空行
        'afterBlockComment': false, // 允许块级注释之后有空行
        'beforeLineComment': true, // 要求行注释之前有一空行
        'afterLineComment': false, // 允许行注释之后有空行
        'allowBlockStart': true, // 允许注释出现在块语句开始位置
        'allowObjectStart': true, // 允许对象字面量开始位置出现注释
        'allowObjectEnd': true, // 允许对象字面量结束位置出现注释
        'allowArrayStart': true, // 允许数组字面量开始位置出现注释
        'allowArrayEnd': true, // 允许数组字面量结束位置出现注释
        'allowClassStart': true, // 允许类开始位置出现注释
        'allowClassEnd': true, // 允许类结束位置出现注释
      },
    ],

    // 注释的 `//` 或 `/*` 后必须跟一个空格
    'spaced-comment': ['error', 'always'],

    // 关闭“数组和对象解构”规则
    'prefer-destructuring': ['off'],

    // 强制操作符使用一致的换行符风格
    'operator-linebreak': ['error', 'after'],

    // 要求尽可能地简化赋值操作
    'operator-assignment': ['error'],

    // 关闭“标识符中有悬空下划线”规则，某些时候需要悬空下划线，比如 mongodb key
    'no-underscore-dangle': ['off'],

    // 禁用嵌套的三元表达式
    'no-nested-ternary': ['error'],

    // 禁止可表达为更简单结构的三元表达式，如 `isFoo ? true : false`
    'no-unneeded-ternary': ['error'],

    // 要求每一个变量声明独占一行
    'one-var': ['error', 'never'],

    // 禁止变量名被覆盖
    'no-shadow': [
      'error',
      {
        'hoist': 'all',
      },
    ],

    // 关键字不能被重新定义
    'no-shadow-restricted-names': ['error'],

    // 要求使用拖尾逗号
    'comma-dangle': ['error', 'always-multiline'],

    // 强制在逗号周围使用空格
    'comma-spacing': ['error'],

    // 强制使用一致代码风格，逗号放在数组元素、对象属性或变量声明之后，且在同一行
    'comma-style': ['error', 'last'],

    // 要求 Switch 语句中有 Default 分支
    'default-case': ['error'],

    // 禁止 if 语句作为唯一语句出现在 else 语句块中
    'no-lonely-if': ['error'],

    // 禁用 tab
    'no-tabs': ['error'],

    // 不允许多个空行
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
      }
    ],

    // 禁止块内填充
    'padded-blocks': ['error', 'never'],

    // 要求语句块之前的空格
    'space-before-blocks': ['error', 'always'],

    // 要求或禁止在语句间填充空行
    'padding-line-between-statements': [
      'error',

      // return 前有空行
      {'blankLine': 'always', 'prev': '*', 'next': 'return'},

      // 块语句前空行
      {'blankLine': 'always', 'prev': ['if', 'block', 'block-like', 'class', 'for', 'function', 'switch', 'try', 'while'], 'next': '*'},
      {'blankLine': 'always', 'prev': '*', 'next': ['if', 'block', 'block-like', 'class', 'for', 'function', 'switch', 'try', 'while']},
    ],

    // 强制使用一致的反勾号、双引号或单引号
    'quotes': ['error', 'single'],

    // 不使用分号
    'semi': ['error', 'never'],

    // 强制分号后有空格
    'semi-spacing': [
      'error',
      {
        'before': false,
        'after': true,
      },
    ],

    // 防止不用分号可能导致的错误
    'no-unexpected-multiline': ['error'],

    // 计算属性方括号使用一致的空格
    'computed-property-spacing': ['error', 'never'],

    // 数组元素 >= 2 时，必须换行
    'array-bracket-newline': [
      'error',
      {
        'minItems': 2,
        'multiline': true,
      },
    ],

    // 强制数组元素间换行
    'array-element-newline': ['error', 'always'],

    // 强制在花括号内使用一致的换行符
    'object-curly-newline': ['error'],

    // 强制将对象的属性放在不同的行上
    'object-property-newline': ['error'],

    // 要求对象字面量中方法和属性使用简写
    'object-shorthand': [
      'error',
      'always',
      {
        'avoidQuotes': false,
      },
    ],

    // 强制在对象字面量的键和值之间使用一致的空格
    'key-spacing': [
      'error',
      {
        'beforeColon': false, // 冒号前不加空格
        'afterColon': true, // 冒号后加空格
        'mode': 'strict', // 强制冒号后只有一个空格
      },
    ],

    // 禁止属性前有空白
    'no-whitespace-before-property': ['error'],

    // 禁止在函数标识符和其调用之间有空格
    'func-call-spacing': ['error', 'never'],

    // 禁止函数圆括号之前有一个空格
    'space-before-function-paren': ['error', 'never'],

    // 关闭“命名的 function 表达式”规则
    'func-names': ['off'],

    // 箭头函数的参数必须使用圆括号括起来
    'arrow-parens': ['error', 'always'],

    // 强制箭头函数使用花括号
    'arrow-body-style': ['error', 'always'],

    // 调用无参构造函数时带括号
    'new-parens': ['error'],

    // 禁止对函数参数再赋值
    'no-param-reassign': ['off'],

    // 要求超过一个方法链则每个调用后都有一个换行符
    'newline-per-chained-call': [
      'error',
      {
        'ignoreChainWithDepth': 1,
      },
    ],

    // 强制圆括号内没有空格
    'space-in-parens': ['error', 'never'],

    // 强制类方法使用 this
    'class-methods-use-this': ['off'],

    // 要求在类成员之间出现空行
    'lines-between-class-members': ['error', 'always'],

    // 构造函数首字母大写
    'new-cap': ['error'],

    // 不要求 import 语句后的语句换行
    'import/newline-after-import': ['off'],
  },
}
