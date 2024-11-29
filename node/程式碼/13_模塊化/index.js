// const tiemo = require('./me');

const path = require('path');
// 正確地引入 ./me.js
const tiemo = require(path.join(__dirname, '/me'));

tiemo();