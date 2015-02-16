var fs = require('fs');
var path = require('path');

module.exports = function(dir, ext, callback) {

  var extеntion = '.' + ext;

  fs.readdir(dir, function(err, list) {

    if (err) {
      return callback(err);
    }
    else {
      result = [];
      for(var i=0, l=list.length; i<l; i++) {
        if (extеntion === path.extname(list[i])) {
          result.push(list[i]);
        }
      }
      callback(null, result);
    }

  });
};
