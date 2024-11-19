 // 1. 導入http模塊
 const http = require('http');

 // 2. 創建服務對象create 创建 server 服务
 // request 意为请求. 是对请求报文的封装对象, 通过 request 对象可以获得请求报文的数据
 // response 意为响应. 是对响应报文的封装对象, 通过 response 对象可以设置响应报文
 // 回調函數在接收到http請求時觸發
 const server = http.createServer((request, response) => {
    // response.end('hello word'); // 設置響應體 並結束這個響應
    response.setHeader('content-type', 'text/html;charset=utf-8');
    response.end('你好')
 })

 // 3. 監聽端口 啟動服務
 server.listen(9000, () => {
    console.log('服務已經啟動 監聽端口9000當中...')
 })