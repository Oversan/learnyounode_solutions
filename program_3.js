var fs = require('fs');
var file = process.argv[2];

var content = fs.readFileSync(file).toString();

console.log(content.split('\n').length - 1);