var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// MIDDLEWARE
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));

// ROUTES
app.get('/', function (request, response) {
  response.sendFile('views/index.html' , { root : __dirname});
});

// Guessing Game
var targetNumber = 10;

app.get('/pick-a-number', function(request, response){
  var num = parseInt(request.query.number);
  if (num === targetNumber){
    response.send('Nailed it!');
  } else if (num > targetNumber){
    response.send('Too High!');
  } else if (num < targetNumber) {
    response.send('Too Low');
  } else {
    response.send('something\'s wrong with that number');
  }
});

app.post('/pick-a-number', function(request, response){
  targetNumber = parseInt(request.body.number);
  response.send('updated number successfully!');
});

// Gallery
app.get('/art-gallery', function (request, response) {
  response.sendFile('views/art-gallery.html' , { root : __dirname});
});

var artworks = [];

app.get('/artworks', function(request, response){
  response.json(artworks);
});

app.post('/artworks', function(request, response){
  var newArtwork = {
    name: request.body.title,
    description: request.body.description,
    artist: request.body.artist
  };
  artworks.push(newArtwork);
  response.json(artworks);
});


// SERVER START
var port = 3000;
app.listen(port, function(){
  console.log('Server Running at localhost:3000/');
});
