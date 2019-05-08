console.log('this is a module.');

const testVar = 200;

function testFn (){
    console.log('testFn:',testVar);
}

module.exports.testVar = testVar;
module.exports.testFn = testFn;
