var express = require('express');
var mongoose = require('mongoose');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require('./server/config/mongoose.js')(app)
require('./server/models/cake.js')(app)
require('./server/config/routes.js')(app)
app.listen(8000, function() {
    console.log("listening on port 8000");
})