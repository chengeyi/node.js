// 流式写入方式适用于大文件写入或者频繁写入的场景, writeFile 适合于写入频率较低的场景

const fs = require('fs');
//创建读取流对象
let ws = fs.createWriteStream('./观书有感.txt');

// 寫入
ws.write('半畝方塘一鑑開');
ws.write('天光雲影共徘徊');
ws.write('估凡遠影碧山境');

// 關閉通道 (加或不加都可以 因為這個文件已全部執行完畢 會自動斷開連結)
ws.end();