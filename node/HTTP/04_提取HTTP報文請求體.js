 // 1. 導入http模塊
 const http = require('http');

 const server = http.createServer((request, response) => {
   // 聲明變數
   let body = '';
   // 綁定data事件
   request.on('data', chunk => {
      body += chunk;
   })
   // 綁定end事件
   request.on('end', () => {
      console.log('body', body);
      response.end('Hello HTTP');
   })
 })

 // 3. 監聽端口 啟動服務
 server.listen(9001, () => {
    console.log('服務已經啟動 監聽端口9001當中...')
 })