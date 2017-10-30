//Challenge 3 (Express Static)
//app.js
var express = require('express');
var app = express();

app.get(function (request, response) {
  response.sendFile(__dirname + '/public/index.html');
});
app.use(express.static('public'));
app.get('/cities', function(req, res){
  var cities = ['Lotopia', 'Caspiana', 'Indigo'];
  res.send(cities);
});

app.listen(3001);