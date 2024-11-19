const fs = require('fs');

//异步获取状态 birthtime:文件創建時間 atime:最後訪問時間 mtime：最後修改時間 ctime：會後一次修改文件狀態的時間
fs.stat('./data.txt', (err, data) => {
    if (err) throw err;
    console.log(data);

    // isFile
    console.log(data.isFile())

    // isDirectory 目標對象是否是資料夾
    console.log(data.isDirectory())
});