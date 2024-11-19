const fs = require('fs');
// fs.unlink('./test.txt', err => {
//     if (err) throw err;
//     console.log('删除成功');
// });

// 調 rm 方法 14.4 
fs.rm('./论语.txt', err=>{
    if(err) {
        throw err
    }
    console.log('删除成功');
})