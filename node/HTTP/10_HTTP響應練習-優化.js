// 導入HTTP模塊
const http = require('http');
const fs = require('fs');
// 創建服務對象
const server = http.createServer((request, response) => {
  // 讀取文件內容
  let html = fs.readFileSync(__dirname + '/10_table.html');
  response.end(html);

})

// 監聽
server.listen(9001, () => {
   console.log('端口9001監聽中...');
})