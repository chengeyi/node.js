// 導入HTTP模塊
const http = require('http');
const fs = require('fs');
// 創建服務對象
const server = http.createServer((request, response) => {
  // 獲取請求url路徑
  let {pathname} = new URL(request.url, 'http://127.0.0.1:9001');
  if(pathname === '/') {
    // 讀取文件內容
    let html = fs.readFileSync(__dirname + '/10_table.html');
    response.end(html);
  }else if(pathname === '/index.css') {
    let css = fs.readFileSync(__dirname + '/index.css');
    response.end(css);
  }else if(pathname === '/index.js') {
    let js = fs.readFileSync(__dirname + '/index.js');
    response.end(js);
  }else {
    response.statusCode = 404;
    response.end('<h1>404 Not Found</h1>');
  }

  

})

// 監聽
server.listen(9001, () => {
  console.log('端口9001監聽中...');
})