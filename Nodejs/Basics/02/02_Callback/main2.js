var fs = require("fs");
fs.readFile('Nodejs\\Basics\\02\\02_Callback\\Input', function (err, data) {
if (err) return console.error(err);
console.log(data.toString());
});
console.log("程序执行结束!");