const port = process.env.API_PORT || 3022
const express = require('express')
const request = require('request')
const app = express()

// This forwards (proxies) all requests to the API to the cyclos client instead.
app.use('/api/*', function(req, res) {
  var url = 'http://localhost:4000'+ req.originalUrl;
  console.log('the url', url)
  var r = null;
  if(req.method === 'POST') {
     r = request.post({uri: url, json: req.body});
  } else {
     r = request(url);
  }

  req.pipe(r).pipe(res);
});

app.use(express.static(__dirname + '/dist'));
app.get('/*', function(req, res) {
  res.sendFile(__dirname + '/dist/index.html');
})

const server = app.listen(port, function() {
  console.log('Express server listening on port ' + port)
})
