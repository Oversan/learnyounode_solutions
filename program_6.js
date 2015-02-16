var dirsorting = require('./program_6_lib.js');

var dir = process.argv[2];
var ext = process.argv[3];

dirsorting(dir, ext, function(err, list) {
  for (i=0, l=list.length; i<l; i++) {
    console.log(list[i]);
  }
});