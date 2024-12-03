// const tiemo = require('./me');

const path = require('path');
// 正確地引入 ./me.js
const me = require(path.join(__dirname, '/me'));

// me.tiemo()
// me.tiemo2()
console.log(me)