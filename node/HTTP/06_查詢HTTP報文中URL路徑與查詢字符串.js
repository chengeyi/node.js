 // 導入http模塊
 const http = require('http');

 const server = http.createServer((request, response) => {
  console.log('requestUrl', request.url) // /search?ke=123
    // 實例化 URL 對象
    let url = new URL(request.url, 'http://127.0.0.1:9001');
    console.log('url', url)
    // 輸出路徑
    console.log( '路徑', url.pathname)

    // 輸出查詢字符串
    console.log( '查詢字符串', url.searchParams.get('ke'));

    response.end('new url');
 })

 // 監聽端口 啟動服務
 server.listen(9001, () => {
    console.log('服務已經啟動 監聽端口9001當中...')
 })