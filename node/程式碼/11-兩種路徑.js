const fs = require('fs');

// 相對路徑
// fs.writeFileSync('./index.html', 'Love');
// fs.writeFileSync('index.html', 'Love');
fs.writeFileSync('../index.html', 'Love');

// 絕對路徑
// fs.writeFileSync('D:/index.html', 'love');
// fs.writeFileSync('/index.html', 'love');