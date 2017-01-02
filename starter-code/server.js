// SERVER-SIDE JAVASCRIPT
// run npm install to install all required packages before starting server

var express = require('express');
var app = express();


// MIDDLEWARE
app.use(express.static('public'));

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

// Allow CORS:
// not necessary since we'll be making requests from a js file
  // that we are also serving (as static assets in public)
// app.use(function(request, response, next) {
//   response.header("Access-Control-Allow-Origin", "*");
//   response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

// ROUTES
// Root Route
// app.get('/', function (request, response) {
//   response.send('hello there!')
// });

app.get('/', function (request, response) {
  response.sendFile('views/index.html' , {root : __dirname});
});

var targetNum = 10;

// route /pickanumber number=5 console.log ('too low/ too high')
app.get('/pickanumber', function(request, response){
  var number = parseInt(request.query.number);

  if (number === targetNum) {
    response.send('nailed it!');
  } else if (number < targetNum) {
    response.send('Too low...');
  } else if (number > targetNum) {
    response.send('Too high!');
  }
});



// Gallery View Route



// SERVER START
var port = 3000;
app.listen(port, function(){
  console.log('Server Running at localhost:3000/');
});
