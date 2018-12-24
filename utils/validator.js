const { Validator } = require('jsonschema');
const validator = new Validator();
const errorMessage = require('./errorMessage');

const validation = (schema) => async (ctx, next) => {
  if (validator.validate(ctx.request.body, schema).errors.length) {
    console.log(validator.validate(ctx.request.body, schema).errors);
    errorMessage.badRequestError();
  }
  await next();
};

module.exports = validation;
