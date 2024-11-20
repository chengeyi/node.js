// 導入HTTP模塊
const http = require('http');
console.log(http)
// 創建服務對象
const server = http.createServer((request, response) => {
   response.setHeader('content-type', 'text/html;charset=utf-8');
   console.log(request.url)
   // 獲取請求方法
   let {method} = request;
   // 獲取請求URL路徑
   let {pathname} = new URL(request.url, 'http://127.0.0.1:9001');
   if (method === 'GET' && pathname === '/login') {
      response.writeHead(200);
      response.end('登入頁面');
    } else if (method === 'GET' && pathname === '/reg') {
      response.writeHead(200);
      response.end('註冊頁面');
    } else {
      response.writeHead(404);
      response.end('404 Not Found');
    }

})

// 監聽
server.listen(9001, () => {
   console.log('端口9001監聽中...');
})