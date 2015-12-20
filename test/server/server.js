var app = require('express')();
var mongoose = require('mongoose');
var connection = mongoose.createConnection('mongodb://localhost/whatever');
var Authenticat = require(__dirname + '/../../index');
var authenticat = new Authenticat(connection);

app.use('/api', authenticat.router);

app.get('/secret', authenticat.tokenAuth, function(req, res) {
  res.send('success!  Hello ' + req.user);
});

app.listen(3000, function() {
  console.log('ok');
});
