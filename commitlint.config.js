export default {
  /*
    扩展现有的配置
    这是一个基于 Angular 提交规范的标准配置
  */
  extends: ['@commitlint/config-conventional'],
  /*
    定义自定义规则：每个规则都有一个名称、一个级别和一个应用方式。级别：
    2 表示错误，
    1 表示警告，
    0 表示关闭规则
  */
  rules: {
    // 指定允许的提交类型
    'type-enum': [
      2,
      'always',
      [
        'build',
        'chore',
        'ci',
        'docs',
        'feat',
        'fix',
        'perf',
        'refactor',
        'revert',
        'style',
        'test',
        '---'
      ]
    ],
    // 'subject-case': [2, 'always', 'sentence-case'], // 要求提交消息主题(subject)使用句首大写形式
    'subject-case': [2, 'never', 'sentence-case'], // 此规则确保提交消息的主题部分不使用句子大小写。
    'subject-full-stop': [2, 'never', '.'], // 此规则确保提交消息的主题部分不以句号结尾。
    'header-max-length': [2, 'always', 72] // 此规则限制提交消息头部的最大长度为 72 个字符
  }
}
