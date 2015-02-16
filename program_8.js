var http = require('http');
var url = process.argv[2];

http.get(url, function(res) {
  var symbols = '';

  res.setEncoding('utf8');
  res.on('data', function(data) {
    symbols += data;
  });

  res.on('end', function() {
    console.log(symbols.length);
    console.log(symbols);
  });
});