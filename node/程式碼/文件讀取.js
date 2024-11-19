//导入 fs 模块
const fs = require('fs');

// 异步读取
// fs.readFile('./观书有感.txt', (err, data) => {
//     if (err) throw err;
//     console.log(data.toString());
// });

//readFileSync 同步读取
let data = fs.readFileSync('./座右铭.txt');
console.log('data', data)
let data2 = fs.readFileSync('./座右铭.txt', 'utf-8');
console.log('data2', data2)