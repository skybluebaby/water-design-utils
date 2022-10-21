module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
    es6: true,
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'space-before-function-paren': 0, //函数定义时括号前面要不要有空格
    eqeqeq: 1, //必须使用全等
    'global-require': 1, // 所有调用require()都位于模块的顶层
    '@typescript-eslint/no-var-requires': 0, //允许require导入模块
    '@typescript-eslint/no-explicit-any': ['off'], // 允许使用any
  },
};
