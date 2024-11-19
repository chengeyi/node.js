// 處理大型文件會更有效率

// 1.
const fs = require('fs');
// 2.创建读取流对象
let rs = fs.createReadStream('./观书有感.txt');

// 3.綁定data事件 chunk 塊的意思 這個chunk會在讀取文件的某一塊時被觸發執行回調
rs.on('data', chunk => {
    console.log(chunk.toString());
    console.log(chunk.length); // 每一塊最大是65536字節（64KB） 所以65536會執行一次chunk回調
});

// 4.读取完毕后, 执行 end 回调 可選事件
rs.on('end', () => {
    console.log('读取完成')
})
