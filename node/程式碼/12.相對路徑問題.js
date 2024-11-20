const fs = require('fs');

// 相对路径中所谓的当前目录，指的是命令行的工作目录，而并非是文件的所在目录
// 所以当命令行的工作目录与文件所在目录不一致时，会出现一些 BUG
// fs.writeFileSync('./love.html', 'Love')

// 解決辦法：使用絕對路徑__dirname
// __dirname 与 require 类似，都是 Node.js 环境中的'全局'变量
// __dirname 保存着当前文件所在目录的绝对路径，可以使用 __dirname 与文件名
console.log(__dirname)
fs.writeFileSync(__dirname + '/love.html', 'Loveddd');