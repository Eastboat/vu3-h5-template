const chalk = require('chalk') // Color
const args = require('minimist')(process.argv.slice(2)) // 解析命令行参数
const msgPath = args['name']
const msg = require('fs').readFileSync(msgPath, 'utf-8').trim() //

const commitRE =
  /^(revert: )?(feat|fix|polish|docs|style|refactor|perf|test|workflow|ci|chore|types|build)(\(.+\))?: .{1,50}/

// 匹配有效的提交信息格式

if (!commitRE.test(msg)) {
  console.log()
  // 打印错误信息，说明提交信息格式无效，并给出正确格式的示例
  console.error(
    `  ${chalk.bgRed.white(' ERROR ')} ${chalk.red(`invalid commit message format.`)}\n\n` +
      chalk.red(
        `  Proper commit message format is required for automated changelog generation. Examples:\n\n`
      ) +
      `    ${chalk.green(`feat(compiler): add 'comments' option`)}\n` +
      `    ${chalk.green(`fix(v-model): handle events on blur (close #28)`)}\n\n` +
      chalk.red(
        `  You can also use ${chalk.cyan(`git cz`)} to interactively generate a commit message.\n`
      )
  )
  process.exit(1) // 以错误状态码 1 退出进程，表示提交信息格式无效
}
