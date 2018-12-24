const config = require('config');
const app = require('./app');
const connector = require('./connector');

const server = app.listen(config.port, () =>
  console.log(`Server is started on port ${config.port}`)
);

connector(server);
