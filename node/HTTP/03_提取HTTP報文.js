 // 1. 導入http模塊
 const http = require('http');

 const server = http.createServer((request, response) => {
   //  response.setHeader('content-type', 'text/html;charset=utf-8');

   // 獲取請求方法
   //console.log(request.method);

   // 獲取請求url
   //console.log(request.url); // 只包含url中的路徑與查詢字串

   // 獲取http協議的版本號
   //console.log(request.httpVersion);

   // 獲取請求頭
   //console.log(request.headers);
   
    response.end('hello')
 })

 // 3. 監聽端口 啟動服務
 server.listen(9000, () => {
    console.log('服務已經啟動 監聽端口9000當中...')
 })