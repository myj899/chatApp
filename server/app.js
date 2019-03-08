var express = require('express');
var body = require('body-parser');
var app = express();
var axios = require('axios');
// const token = require('./config.js').API_KEY;
// const db = require('./database.js');

app.use(body.json());

// Due to express, when you load the page, it doesn't make a get request to '/', it simply serves up the dist folder
app.use(express.static(__dirname + '/../client/dist'));

app.listen(3000, function() {
  console.log('listening on port 3000!');
});
