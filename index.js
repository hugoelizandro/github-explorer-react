var express = require('express');
var app = express();

app.set('port', (process.env.PORT));

app.use(express.static(__dirname + '/build'));
app.use('/build', express.static(__dirname + '/build'));

app.get('/', function(request, response) {
  response.sendFile('build/index.html', {
     root: __dirname
   });
});

app.get('*', function(req, res){
  res.redirect('/');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});