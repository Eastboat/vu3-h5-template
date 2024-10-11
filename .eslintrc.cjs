/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  ignorePatterns: ['**/*.scss'], //忽略 SCSS 文件扫描
  rules: {
    'vue/multi-word-component-names': 'off' // 确保组件名称始终是多词的 (默认已关闭)
    // 其他规则
  }
}
