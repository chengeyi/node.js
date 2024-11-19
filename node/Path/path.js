const fs = require('fs');
const path = require('path');

// // resolve 解決witeFileSync路徑問題
// //拼接绝对路径 第二個參數是相對路徑
// console.log(path.resolve(__dirname, './test'));

// // 使用 path.resolve 生成絕對路徑
// const filePath = path.resolve(__dirname, 'love.html');
// // 寫入文件
// fs.writeFileSync(filePath, 'Loveddd');


// sep 分割服
// console.log(path.sep)


// parse 方法  __dirname __filename '全局變數' 獲得文件的絕對路徑
// console.log(__dirname)
// let str = '/Users/linchengyi/Desktop/test/node/Path';
// console.log(path.parse(str))

// console.log(__filename)
let str2 = '/Users/linchengyi/Desktop/test/node/Path/path.js';
// console.log(path.parse(str2))

// parse的快捷 basename 獲取文件名
// console.log(path.basename(str2))

// parse的快捷 dirname 获取路径
// console.log(path.dirname(str2))

// parse的快捷 extname 获得路径的扩展名
console.log(path.extname(str2))


