const {parse,format} = require('path');

const filePath = 'urc\\local\\node_module\\package.json';

const ret = parse(filePath);
console.log(ret);

console.log(format(ret));