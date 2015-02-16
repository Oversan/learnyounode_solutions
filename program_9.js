var http = require('http');
var urls = process.argv.slice(2);
var symbols = ['','',''];
var count = 0;

for (var i=0, l=urls.length; i<l; i++) {
  getInit(i);
}

function getInit(i) {
  http.get(urls[i], function(res) {
    res.setEncoding('utf8');
    res.on('data', function(data) {
      symbols[i] += data.toString();
    });

    res.on('end', function() {
      count++;
      if (count == urls.length) {
        outputData();
      }
    });
  })
};

function outputData() {
  for (var i=0, l=urls.length; i<l; i++) {
    console.log(symbols[i]);
  }
}