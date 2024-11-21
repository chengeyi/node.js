// 創建一個HTTP服務，端口為9001，滿足如下需求
// GET /index.html          響應     page/index.html        的文件內容
// GET /css/app.css         響應     page/css/app.css       的文件內容
// GET /image/logo.html     響應     page/image/logo.png    的文件內容

// 導入HTTP模塊
const http = require('http');
const fs = require('fs');
const path = require('path');

// 創建服務對象
const server = http.createServer((request, response) => {
  // 獲取請求url路徑
  let {pathname} = new URL(request.url, 'http://127.0.0.1:9001');
  //網站根目錄
  let root = __dirname + '/page'; 
  // 拼接文件路徑
  let filePath = root + pathname;
  // 讀取文件 fs 異步API
  fs.readFile(filePath, (err, data) => {
    if(err) {
      response.statusCode = 500;
      response.end('文件讀取失敗');
      return;
    }

    // 獲取文件後綴名
    let ext = path.extname(filePath).slice(1);
    console.log('ext', ext)

    response.end(data);
  })


  // if(pathname === '/index.html') {
  //   // 讀取文件內容
  //   let html = fs.readFileSync(__dirname + '/page/index.html');
  //   response.end(html);
  // }else if(pathname === '/css/app.css') {
  //   let css = fs.readFileSync(__dirname + '/page/css/app.css');
  //   response.end(css);
  // }else if(pathname === '/image/300.png') {
  //   let img = fs.readFileSync(__dirname + '/page/image/300.png');
  //   response.end(img);
  // }else {
  //   response.statusCode = 404;
  //   response.end('<h1>404 Not Found</h1>');
  // }

  

})

// 監聽
server.listen(9001, () => {
  console.log('端口9001監聽中...');
})