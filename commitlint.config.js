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
  },
  prompt: {
    messages: {
      type: '选择你要提交的类型 :',
      scope: '选择一个提交范围（可选）:',
      customScope: '请输入自定义的提交范围 :',
      subject: '填写简短精炼的变更描述 :\n',
      body: '填写更加详细的变更描述（可选）。使用 "|" 换行 :\n',
      breaking: '列举非兼容性重大的变更（可选）。使用 "|" 换行 :\n',
      footerPrefixesSelect: '选择关联issue前缀（可选）:',
      customFooterPrefix: '输入自定义issue前缀 :',
      footer: '列举关联issue (可选) 例如: #31, #I3244 :\n',
      generatingByAI: '正在通过 AI 生成你的提交简短描述...',
      generatedSelectByAI: '选择一个 AI 生成的简短描述:',
      confirmCommit: '是否提交或修改commit ?'
    },
    // prettier-ignore
    types: [
      { value: "feat",     name: "特性:     ✨  新增功能", emoji: ":sparkles:" },
      { value: "fix",      name: "修复:     🐛  修复缺陷", emoji: ":bug:" },
      { value: "docs",     name: "文档:     📝  文档变更", emoji: ":memo:" },
      { value: "style",    name: "格式:     💄  代码格式（不影响功能，例如空格、分号等格式修正）", emoji: ":lipstick:" },
      { value: "refactor", name: "重构:     ♻️  代码重构（不包括 bug 修复、功能新增）", emoji: ":recycle:" },
      { value: "perf",     name: "性能:     ⚡️  性能优化", emoji: ":zap:" },
      { value: "test",     name: "测试:     ✅  添加疏漏测试或已有测试改动", emoji: ":white_check_mark:"},
      { value: "build",    name: "构建:     📦️  构建流程、外部依赖变更（如升级 npm 包、修改 vite 配置等）", emoji: ":package:"},
      { value: "ci",       name: "集成:     🎡  修改 CI 配置、脚本",  emoji: ":ferris_wheel:"},
      { value: "revert",   name: "回退:     ⏪️  回滚 commit",emoji: ":rewind:"},
      { value: "chore",    name: "其他:     🔨  对构建过程或辅助工具和库的更改（不影响源文件、测试用例）", emoji: ":hammer:"},
    ],
    useEmoji: true,
    emojiAlign: 'center',
    useAI: false,
    aiNumber: 1,
    themeColorCode: '',
    scopes: [],
    allowCustomScopes: true,
    allowEmptyScopes: true,
    customScopesAlign: 'bottom',
    customScopesAlias: 'custom',
    emptyScopesAlias: 'empty',
    upperCaseSubject: false,
    markBreakingChangeMode: false,
    allowBreakingChanges: ['feat', 'fix'],
    breaklineNumber: 100,
    breaklineChar: '|',
    skipQuestions: [],
    issuePrefixes: [{ value: 'closed', name: 'closed:   ISSUES has been processed' }],
    customIssuePrefixAlign: 'top',
    emptyIssuePrefixAlias: 'skip',
    customIssuePrefixAlias: 'custom',
    allowCustomIssuePrefix: true,
    allowEmptyIssuePrefix: true,
    confirmColorize: true,
    maxHeaderLength: Infinity,
    maxSubjectLength: Infinity,
    minSubjectLength: 0,
    scopeOverrides: undefined,
    defaultBody: '',
    defaultIssues: '',
    defaultScope: '',
    defaultSubject: ''
  }
}
