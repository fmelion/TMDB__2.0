const express = require('express');
const volleyball = require('volleyball');
const helmet = require('helmet');
const passport = require('passport');
const bodyParser = require('body-parser');
const db = require('./db');
const { User, Favourite } = require('./models');

require('./config/auth');

const routes = require('./routes');
const secureRoute = require('./routes/secure-routes');

const app = express();

app.use(volleyball);
app.use(helmet());
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', routes);

app.use('/user', passport.authenticate('jwt', { session: false }), secureRoute);

app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.json({ error: err });
});

db.sync({ force: false }).then(() => {
  app.listen(3000, function () {
    console.log(`Listening on port 3000!`);
  });
});