const fs = require('fs');
const util = require('util');

util.promisify(fs.readFile)('Nodejs\\Basics\\04\\01_guiding\\01_promise.js')
.then(data => {
    console.log(data.toString());
})
.catch(err => {
    console.log(err);
})

