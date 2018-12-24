const notFoundError = (message) => {
  throw { message: message, status: 404 };
};

const badRequestError = (message) => {
  throw { message: message, status: 400 };
};

const unauthorizedError = (message) => {
  throw { message: message, status: 401 };
};

const validationError = (message) => {
  throw { message: message, status: 422 };
};

const forbiddenError = (message) => {
  throw { message: message, status: 403 };
};

const internalServerError = (message) => {
  throw { message: message, status: 500 };
};

module.exports = {
  badRequestError,
  notFoundError,
  unauthorizedError,
  validationError,
  forbiddenError,
  internalServerError,
};
