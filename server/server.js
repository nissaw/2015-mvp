

var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(__dirname + '/public'));
// app.use('/bower_components',  express.static(__dirname + '/bower_components'));


// works but does not load scripts
app.get('/', function(req, res){
  res.sendFile(path.join(__dirname + './../public/index.html'))
});

// app.get('/app/:file', function(req, res){
//     res.sendFile('/Users/nissawollum/Documents/HRRB/MVP/public/app/'+req.params.file, res);
// });


// works but does not load scripts
// app.use(express.static(__dirname + '/public'));
// app.get('/', function(req, res){
//   res.sendFile('/Users/nissawollum/Documents/HRRB/MVP/public/index.html'); 
// });


// app.use(express.static(__dirname + '/public'));
// app.use('/bower_components',  express.static(__dirname + '/bower_components'));


///

  // app.use(express.static(__dirname + '/public'));
  // app.use(express.static(__dirname + '/bower_components'))





//
// app.use(express.static(path.join(__dirname, '/public')));
// app.use('/bower_components',  express.static( path.join(__dirname, '/bower_components')));

// app.get('/', function(req, res){
//   res.sendFile(path.join(__dirname + './../public/index.html'))
// });

app.listen(3000);
