const fs = require("fs");

fs.readFile("Commonjs/02_custom.js", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data.toString());
  }
});
