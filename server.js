const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');
const BaseRouter = require('./routes');
const app = express();


app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'src'), { index: false }));

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Security
if (process.env.NODE_ENV === 'production') {
  app.use(helmet());
}

app.use('/', BaseRouter);

module.exports = app;