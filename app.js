'use strict';

const koa = require('koa');
const views = require('koa-views');
const logger = require('koa-logger');
const staticCache = require('koa-static-cache');
const bodyParser = require('koa-bodyparser');
const config = require('./config');
const app = koa();

app.use(logger());
app.use(staticCache());
app.use(views());
app.use(bodyParser());

app.listern(config.port);
