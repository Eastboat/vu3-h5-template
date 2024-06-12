/*
VSCode 商店安装  Visual Studio Code Commitizen Support  插件
command + shift + p 输入 conventional commit，就能有 commitizen 的效果
根目录下创建自定义配置文件 .cz-config.js ，添加对应配置内容信息即可。具体配置见 demo 项目地址（效果如下图所示）
*/

module.exports = {
  // type 类型
  types: [
    { value: 'feat', name: '✨ 新增功能' },
    { value: 'fix', name: '🐛 修复缺陷' },
    { value: 'docs', name: '📝 文档变更' },
    {
      value: 'style',
      name: '💄 代码格式（不影响功能，例如空格、分号等格式修正）'
    },
    {
      value: 'refactor',
      name: '♻ 代码重构（不包括 bug 修复、功能新增）'
    },
    {
      value: 'perf',
      name: '⚡ 性能优化'
    },
    { value: 'test', name: '✅ 添加、修改测试用例' },
    {
      value: 'build',
      name: '📦️ 构建流程、外部依赖变更（如升级 npm 包、修改 vite 配置等）'
    },
    { value: 'ci', name: '🎡 修改 CI 配置、脚本' },
    { value: 'revert', name: '⏪ 回滚 commit' },
    {
      value: 'chore',
      name: '🔨 对构建过程或辅助工具和库的更改（不影响源文件、测试用例）'
    }
  ],

  // scope 类型，针对 React 项目
  scopes: [
    ['components'],
    ['deps', '项目依赖修改']
    // 如果选择 custom ,后面会让你再输入一个自定义的 scope , 也可以不设置此项， 把后面的 allowCustomScopes 设置为 true
  ].map(([value, description]) => {
    return {
      value,
      name: `${value.padEnd(30)} (${description})`
    }
  }),

  // allowTicketNumber: false,
  // isTicketNumberRequired: false,
  // ticketNumberPrefix: 'TICKET-',
  // ticketNumberRegExp: '\\d{1,5}',

  // 可以设置 scope 的类型跟 type 的类型匹配项，例如: 'fix'
  /*
    scopeOverrides: {
      fix: [
        { name: 'merge' },
        { name: 'style' },
        { name: 'e2eTest' },
        { name: 'unitTest' }
      ]
    },
   */
  // 覆写提示的信息
  messages: {
    type: '请确保你的提交遵循了原子提交规范！\n选择你要提交的类型:',
    scope: '\n 选择一个 scope (可选):',
    // 选择 scope: custom 时会出下面的提示
    customScope: '请输入自定义的 scope:',
    subject: '填写一个简短精炼的描述语句:\n',
    body: '添加一个更加详细的描述，可以附上新增功能的描述或 bug 链接、截图链接 (可选)。使用 "|" 换行:\n',
    breaking: '列举非兼容性重大的变更 (可选):\n',
    footer: '列举出所有变更的 ISSUES CLOSED  (可选)。 例如.: #31, #34:\n',
    confirmCommit: '确认提交?'
  },

  // 是否允许自定义填写 scope ，设置为 true ，会自动添加两个 scope 类型 [{ name: 'empty', value: false },{ name: 'custom', value: 'custom' }]
  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix'],
  // skip any questions you want
  // skipQuestions: [],

  // subject 限制长度
  subjectLimit: 100
  // breaklineChar: '|', // 支持 body 和 footer
  // footerPrefix : 'ISSUES CLOSED:'
  // askForBreakingChangeFirst : true,
}
