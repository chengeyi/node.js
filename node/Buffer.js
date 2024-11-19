const { Builder } = require("selenium-webdriver");

//创建了一个长度为 10 字节的 Buffer，相当于申请了 10 字节的内存空间，每个字节的值为 0
let buf_1 = Buffer.alloc(10);
// console.log(buf_1) // 结果为 <Buffer 00 00 00 00 00 00 00 00 00 00>

//创建了一个长度为 10 字节的 Buffer，buffer 中可能存在旧的数据, 可能会影响执行结果，所以叫unsafe 但效能較alloc好 因為alloc會再回去清掉之前沒在用的記憶體
let buf_2 = Buffer.allocUnsafe(10);
// console.log(buf_2)

//通过字符串创建 Buffer 英文一個字佔1字節 
let buf_3 = Buffer.from('hello');
// 預設16進制
// console.log(buf_3)
//通过数组创建 Buffer
let buf_4 = Buffer.from([105, 108, 111, 118, 101, 121, 111, 117]);


// 操作buffer
// 我们可以借助 toString 方法将 Buffer 转为字符串
let buf_5 = Buffer.from([105, 108, 111, 118, 101, 121, 111, 117]);
// toString 默认是按照 utf-8 编码方式进行转换的。
// console.log(buf_5.toString()) // iloveyou

// Buffer 的读写
//读取（十進制）
// console.log(buf_3[1]);
//修改
buf_3[1] = 97;
//查看字符串结果
// console.log(buf_3.toString());

// 1. 如果修改的数值超过 255 ，则超过 8 位数据会被舍弃
// 2. 一个 utf-8 的字符一般占 3 个字节
// 溢出
let buf = Buffer.from('hello');
buf[0] = 361; // 捨棄高位數字 361的二進制是 101101001 => node會打高於8位（開頭的1跟0）捨棄掉 => 1101001 超過了一字節（8位）361 % 256 = 105(二進制等於1101001)
console.log(buf.toString())

// 對utf-8來說中文一個字佔3字節
let missyou = Buffer.from('我想妳');
console.log(missyou) //<Buffer e6 88 91 e6 83 b3 e5 a6 b3>