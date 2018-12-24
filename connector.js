const db = require('./models');

module.exports = function(app) {
  db.sequelize
      .sync()
      .then(() => console.log('Connected to the database'))
      .catch((err) => {
        app.close();
        console.error('Unable to connect to the database: ', err);
      });
};
