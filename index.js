
var express = require('express');
var app = express();//router() used
app.get('/admin', function (req, res) //using GET to fetch the admin page
{
 console.log('admin page');//the admin page will have the following content
})

var indexRouter = require('./routes/index');
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
module.exports = app;