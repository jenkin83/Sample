
var buf = Buffer.alloc(256);

var len = buf.write('write test');
console.log('写入数据长度：'+len);
