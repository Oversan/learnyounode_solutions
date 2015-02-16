var fs = require('fs');
var path = require('path');
var dir = process.argv[2];
var extеntion = '.' + process.argv[3];

fs.readdir(dir, function(err, list) {
  for(var i=0, l=list.length; i<l; i++) {
    if (extеntion === path.extname(list[i])) {
      console.log(list[i]);
    }
  }
});