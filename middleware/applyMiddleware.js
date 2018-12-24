const bodyParser = require('koa-bodyparser');
const logger = require('koa-morgan');
const errorHandler = require('./errorHandler');

module.exports = (app) => {
  app.use(bodyParser());
  app.use(logger('dev'));
  app.use(errorHandler);
};
