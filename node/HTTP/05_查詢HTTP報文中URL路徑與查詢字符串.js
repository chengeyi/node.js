 // 導入http模塊
 const http = require('http');
// 1. 導入url模塊
const url = require('url');

 const server = http.createServer((request, response) => {
   // 2.解析 request.url
   console.log(request.url)
   // url.parse第二參數若設定為true則query解析為物件
   let res = url.parse(request.url, true);
   console.log('res', res)
   // 路徑
   let pathname = res.pathname;
   console.log('pathname', pathname);
   // 提取搜尋關鍵字
   let keyword = res.query.ke;
   console.log('keyword', keyword);

   response.end('Hello HTTP');
 })

 // 監聽端口 啟動服務
 server.listen(9001, () => {
    console.log('服務已經啟動 監聽端口9001當中...')
 })