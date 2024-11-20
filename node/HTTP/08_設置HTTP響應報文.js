// 導入HTTP模塊
const http = require('http');

// 創建服務對象
const server = http.createServer((request, response) => {

  // 1.設置響應狀態碼
  response.statusCode = 203;
  // 2.響應狀態的描述
  response.statusMessage = 'success';
  // 3.響應頭
  response.setHeader('content-type', 'text/html;charset=utf-8');
  response.setHeader('Server', 'Node.js');
  response.setHeader('myHeader', 'test test test');
  response.setHeader('test', ['a', 'b', 'c']);
  // 4.想硬體的設置(若有write一般response.end不會寫東西)
  response.write('love');
  response.write('love');
  response.write('love');


  response.end();

})

// 監聽
server.listen(9001, () => {
   console.log('端口9001監聽中...');
})