const express = require('express');
const volleyball = require('volleyball');
const helmet = require('helmet');
const passport = require('passport');
const bodyParser = require('body-parser');
const db = require('./config/db');
const { User, Favourite } = require('./models');
const cors = require('cors');

require('./config/passport');

const routes = require('./routes');

const app = express();

app.use(volleyball);
app.use(helmet());
app.use(express.json());

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(passport.initialize());

app.use('/', routes);

app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.json({ error: err });
});

db.sync({ force: false });

module.exports = app;
