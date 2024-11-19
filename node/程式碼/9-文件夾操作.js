const fs = require('fs');

// // 2-1.創建單個文件夾 dir 表示文件
// fs.mkdir('./page', err => {
//     if (err) throw err;
//     console.log('创建成功');
// });

// //2-2.递归异步创建
// fs.mkdir('./1/2/3', { recursive: true }, err => {
//     if (err) throw err;
//     console.log('递归创建成功');
// });

// // 2-3. 讀取文件夾
// fs.readdir('./1', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });

// // 2-4. 刪除文件夾
// fs.rmdir('./page', err => {
//     if (err) throw err;
//     console.log('删除成功');
// });

// //异步递归删除文件夹
// fs.rm('./1', { recursive: true }, err => {
//     if (err) {
//         console.log(err);
//     }
//     console.log('递归删除')
// });