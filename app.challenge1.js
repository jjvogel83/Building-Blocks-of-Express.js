//Challenge 1 (Locations)
//app.js
var express = require('express');
var app = express(); 

app.get('/locations', function(request, response){
  var locations = ['Caspiana', 'Indigo', 'Paradise'];
  response.send(locations);
});

app.listen(3001, function() {
console.log('Running Express');
});