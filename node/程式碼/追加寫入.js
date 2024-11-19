// 非同步
const fs = require('fs');
fs.appendFile('./座右铭.txt', '择其善者而从之，其不善者而改之。', err => {
    console.log(err)
    if (err) throw err;
    console.log('追加成功')
});

// 同步
fs.appendFileSync('./座右铭.txt','\r\n温故而知新, 可以为师矣');

// writeFile實現追加寫入
fs.writeFile('./座右铭.txt', 'love', {flag: 'a'}, err => {
    if (err) throw err;
    console.log('追加成功')
})