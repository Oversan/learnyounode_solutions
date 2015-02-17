var http = require('http');
var url = require('url');
var port = process.argv[2];

var server = http.createServer(function(req, res){
  var path = url.parse(req.url);

  if (req.method == 'GET') {
    var dateIso = path.query.replace('iso=', '');
    var date = new Date(dateIso);
    res.writeHead(200, { 'Content-Type': 'application/json' });

    switch (path.pathname) {
      case '/api/parsetime':
        var hh = date.getHours();
        var mm = date.getMinutes();
        var ss = date.getSeconds();
        res.write(JSON.stringify({"hour": hh, "minute": mm, "second": ss}));
        break;
      case '/api/unixtime':
        var ms = date.getTime();
        res.write(JSON.stringify({"unixtime": ms}));
        break;
    }

    res.end();
  }

});

server.listen(port);