const express = require('express');

const app = express();

const urlController = require('./controllers/url.controller');

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.set('view engine', 'ejs');

app.use('/',urlController)

app.use('/shorturls', urlController);


module.exports = app;