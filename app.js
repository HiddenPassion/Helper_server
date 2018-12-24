const Koa = require('koa');
const cors = require('koa2-cors');
const router = require('./routes');

const app = new Koa();

app.use(cors());
router(app);

module.exports = app;
