
const fs = require('fs');
// 文件重命名
// fs.rename('./观书有感.txt', './论语.txt', (err) =>{
//     if(err) throw err;
//     console.log('完成')
//     });

// 文件移動 fs.renameSync(oldPath, newPath)
fs.renameSync('./座右铭.txt', '../论语/我的座右铭.txt');