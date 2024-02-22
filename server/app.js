const express = require('express');
const serverConfig = require('./config/serverConfig');
const indexRouter = require('./routes/index.route');

const app = express();

serverConfig(app);
app.use('/', indexRouter);

app.listen(3000, () => {
  console.log('Server started');
});
