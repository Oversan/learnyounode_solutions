var net = require('net');
var port = process.argv[2];

var server = net.createServer(function(c) {
  var date = new Date();
  var YYYY = date.getFullYear();

  function twoDigits(dateFunc) {
    return ('0' + dateFunc).slice(-2)
  }

  var MM = twoDigits(date.getMonth()+1);
  var DD = twoDigits(date.getDate());
  var hh = twoDigits(date.getHours());
  var mm = twoDigits(date.getMinutes());

  var fullDate = YYYY+'-'+MM+'-'+DD+' '+hh+':'+mm+'\n';

  c.write(fullDate);
  c.end();
});

server.listen(port);