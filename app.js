'use strict';
var express = require('express');

//var todos = require('./routes/todos');
var AV = require('leanengine');

var app = express();

app.use(express.static('public'));

// 加载云引擎中间件
app.use(AV.express());

module.exports = app;
