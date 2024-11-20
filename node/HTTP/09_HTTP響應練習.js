// 導入HTTP模塊
const http = require('http');

// 創建服務對象
const server = http.createServer((request, response) => {
  response.end(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
    </head>
    <style>
      td{
        padding: 20px 40px;
      }

      table,td{
        border-collapse: collapse;
      }

      table tr:nth-child(odd){
        background: #aef
      }

      table tr:nth-child(even){
        background: #fcb
      }
    </style>
    <body>
      <table border="1">
        <tr>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </table>
    </body>
    </html>
    <script>
      let tds = document.querySelectorAll('td');
      tds.forEach((item) => {
        item.onclick = function(){
          this.style.background = '#222';
        }
      })
    </script>
`);

})

// 監聽
server.listen(9001, () => {
   console.log('端口9001監聽中...');
})