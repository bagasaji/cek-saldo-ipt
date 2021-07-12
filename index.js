const express = require('express');
const moment = require('moment');
const bodyParser = require('body-parser');

//Routings
const saldoRoutes = require('./routes/saldo');
const errorController = require('./controllers/error');

//Create Express App
const app = express();
const ports = process.env.PORT || 4000;

//create middleware
app.use(bodyParser.json());

//CORS - allow access to different pages (express-angular)
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', '*');
  // res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-Custom-Header, Authorization');
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  res.setHeader('X-TIMESTAMP', moment().format());
  next();
});

app.use('/bi/openapi/balance-inquiry', saldoRoutes);

app.use(errorController.get404);
app.use(errorController.get500);

//listen to the port
app.listen(ports, () => console.log(`Listening on port ${ports}`));