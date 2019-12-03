
var events = require('events');
var eventEmmiter = new events.EventEmitter();

var connectHandler = function connected(){
    console.log('连接成功！');

    eventEmmiter.emit('data_received');
}
eventEmmiter.on('connect',connectHandler);

var dataReceiveHandler = function(){
    console.log('数据已接收！');
}
eventEmmiter.on('data_received',dataReceiveHandler);

eventEmmiter.emit('connect');
console.log('程序已结束！');



