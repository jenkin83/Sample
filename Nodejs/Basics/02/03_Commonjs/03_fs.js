const fs = require("fs");

fs.readFile("Nodejs\\Basics\\02\\03_Commonjs\\03_fs.js", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data.toString());
  }
});
