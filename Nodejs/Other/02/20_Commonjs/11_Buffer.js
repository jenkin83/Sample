console.log(Buffer.alloc(10));

console.log(Buffer.isBuffer({}));
console.log(Buffer.isBuffer(Buffer.from([1,2,3])));

console.log(Buffer.byteLength('test'));
console.log(Buffer.byteLength('测试'));

const buf1 = Buffer.from('this ');
const buf2 = Buffer.from('is ');
const buf3 = Buffer.from('node ');
const buf4 = Buffer.from('module ');
const buf5 = Buffer.from('!');

const buf = Buffer.concat([buf1,buf2,buf3,buf4,buf5]);

console.log(buf.toString());
