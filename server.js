const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');
const helmet = require('helmet');
const favicon = require('serve-favicon');
const BaseRouter = require('./routes');

const app = express();

// Security
if (process.env.NODE_ENV === 'production') {
  app.use(
    helmet.contentSecurityPolicy({
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", "'https://maxcdn.bootstrapcdn.com'"],
        fontSrc: ["'self'", "'https://fonts.googleapis.com'", "data:"],
        styleSrc: ["'self'", "'https://maxcdn.bootstrapcdn.com'"],
      }
    })
  );
}

app.disable('x-powered-by');
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, './src'), { index: false }));
app.use('/jquery', express.static(path.join(__dirname, './node_modules/jquery/dist/')));

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(favicon(path.join(__dirname, './src/assets/images', 'favicon.ico')));

app.use('/', BaseRouter);

module.exports = app;
