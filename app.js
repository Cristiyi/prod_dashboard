var express = require('express');
var multer = require('multer');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var fs = require('fs');
var multiparty = require('connect-multiparty');
multipartyMiddleware = multiparty();
require('dotenv').config({silent: true});
var cloudant = require('./models/cloudant');
var domain = require('domain');
var request = require('request');
var FormData = require('form-data');
var app = express();
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'app', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'app')));

app.use(function(req, res, next) {
  var reqDomain = domain.create();
  reqDomain.on('error', function(err) {
    fs.appendFile('log.log', Date() + ' | ' + req.originalUrl + ' | ' + JSON.stringify(req.body) + ' | ' + err + '\n', function(err) {
      if (err) console.log(err);
    });
    console.log("Error req:", req.originalUrl, req.body);
    res.status(500).send(err);
  });
  reqDomain.run(next);
});


app.use('/', require('./routes/folders'));


app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// process.on('uncaughtException', function (err) {
//     console.log(err);
// });

module.exports = app;
