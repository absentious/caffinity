


var createError = require('http-errors');
var express = require('express');
var session = require('express-session');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
//var passport = require('./passport')
var cors = require('cors')

var app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

console.log(__dirname)

app.use(logger('dev'));

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(require('body-parser').urlencoded({ extended: true, limit: '500mb' }));

const mongoose = require('mongoose');
const MongoStore = require('connect-mongo')(session);
app.use(session({
  store: new MongoStore({ mongooseConnection: mongoose.connection }),
  resave: true,
  saveUninitialized: true,
  secret: 'caffinity',
}))


app.use('/', require('./routes/index'));
app.use('/cafe', require('./routes/cafe'));

/* 

app.use(function (req, res, next) {
    next(createError(404));
});
  
  // error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    console.error(err)
    // render the error page
    res.status(err.status || 500);
    res.json({
        message: err.message,
        status: err.status,
        stack: err.stack
    });
});*/

module.exports = app;