'use strict';
var express = require('express');

var AV = require('leanengine');

var app = express();

// 加载云引擎中间件
app.use(AV.express());

app.get('/', function(req, res) {
    res.cookie('live', '1');
    res.redirect('/index.html');
});

app.use(express.static('public'));

module.exports = app;
