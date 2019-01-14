
// 编译器的钩子
    compiler.hooks.invalid.tap('era-msg-invalid', () => {
        console.log('Compiling...')
    })

    compiler.hooks.done.tap('era-msg-done', (stats) => {

    })



// 输出颜色
    const chalk = require('chalk')

    chalk.green('Compiled successfully')



