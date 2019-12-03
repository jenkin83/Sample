
var EventEmmiter = require('events').EventEmitter;
var emmiter = new EventEmmiter();

emmiter.on('some_event',function(arg1,arg2){
    console.log('listen1 ',arg1, arg2);
});
emmiter.on('some_event', function(arg1,arg2){
    console.log('listen2 ', arg1, arg2);
});

emmiter.emit('some_event', '参数1', '参数2');
