function tiemo() {
    console.log('tiemo');
}

function tiemo2() {
    console.log('tiemo2');
}

// module.exports = {
//     tiemo,
//     tiemo2
// };

// exports.tiemo = tiemo;
// exports.tiemo2 = tiemo2;

// 1 module.exports 可以暴露任意数据
// module.exports = '1223';
// module.exports = 123;

// 2 不能使用 exports = value 的形式暴露数据，模块内部 module 与 exports 的隐式关系
// exports = module.exports = {} ，require 返回的是目标模块中 module.exports 的值