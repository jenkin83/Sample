
var events = require('events');
var emiter = new events.EventEmitter();

// 监听器
var listener1 = function(){
    console.log('listener1 执行');
};

var listener2 = function(){
    console.log('listener2 执行');
};

// 绑定
emiter.addListener('connect', listener1);
emiter.on('connect', listener2);

// 监听数量
var listenCount = emiter.listenerCount('connect');
console.log(listenCount+'个监听器监听连接事件');

// 触发事件
emiter.emit('connect');

// 删除事件
emiter.removeListener('connect',listener1);
console.log('listener1 不在监听');

// 监听数量
listenCount = emiter.listenerCount('connect');
console.log(listenCount+'个监听器监听连接事件');

// 触发事件
emiter.emit('connect');

console.log('程序执行结束');