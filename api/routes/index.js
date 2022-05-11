const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const { User, Favourite } = require('../models/index');
const { hashSync, compareSync } = require('bcrypt');

const router = express.Router();

router.post('/register', async (req, res, next) => {
  try {
    const user = await User.create({
      username: req.body.username,
      password: hashSync(req.body.password, 10),
      email: req.body.email,
    });

    res.send({
      success: true,
      message: 'User created successfully',
      user: {
        id: user.id,
        username: user.username,
      },
    });
  } catch (err) {
    // console.log(err);
    
    res.send({
      success: false,
      message: 'Something went wrong',
      error: err,
    });
  }
});

router.post('/login', async (req, res) => {
  const user = await User.findOne({ where: { email: req.body.email } });

  if (!user) {
    return res.status(401).send({
      success: false,
      message: 'Could not find the user.',
    });
  }

  if (!compareSync(req.body.password, user.password)) {
    return res.status(401).send({
      success: false,
      message: 'Incorrect password.',
    });
  }

  const payload = {
    username: user.username,
    id: user.id,
  };

  const token = jwt.sign(payload, 'the secret key', { expiresIn: '1d' });

  return res.status(200).send({
    success: true,
    message: 'Logged in successfully!',
    token: 'Bearer ' + token,
  });
});

router.get(
  '/protected',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    res.status(200).send({
      success: true,
      user: {
        id: req.user.id,
        username: req.user.username,
      },
    });
  }
);

module.exports = router;
