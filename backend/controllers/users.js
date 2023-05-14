const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../config/config');
const User = require('../models/user');
const findUser = require('../utils/findUser');
const updateUser = require('../utils/updateUser');
const ConflictError = require('../errors/ConflictError');

const getUserInfo = (req, res, next) => {
  findUser(req.user._id, res, next);
};

const getUser = (req, res, next) => {
  findUser(req.params.id, res, next);
};

const login = (req, res, next) => {
  const { email, password } = req.body;
  return User.findUserByCredentials(email, password)
    .then((user) => {
      const token = jwt.sign(
        { _id: user._id },
        config.NODE_ENV === 'production' ? config.JWT_SECRET : 'dev-secret',
        { expiresIn: '7d' },
      );
      res.send({ token });
    })
    .catch(next);
};

const getUsers = (req, res, next) => {
  User.find({})
    .then((users) => res.send(users))
    .catch(next);
};

const createUser = async (req, res, next) => {
  const {
    name,
    about,
    avatar,
    email,
    password,
  } = req.body;
  bcrypt.hash(password, 10)
    .then((hash) => User.create({
      name,
      about,
      avatar,
      email,
      password: hash,
    }))
    .then((user) => res.send({
      email: user.email,
      name: user.name,
      about: user.about,
      avatar: user.avatar,
    }))
    .catch((e) => {
      if (e.code === 11000) {
        next(new ConflictError('Неправильный формат почты или почта уже используется'));
      } else {
        next(e);
      }
    });
};

const updateProfile = (req, res, next) => {
  const { name, about } = req.body;
  const params = { name, about };
  updateUser(req, res, next, params);
};

const updateAvatar = (req, res, next) => {
  const { avatar } = req.body;
  const params = { avatar };
  updateUser(req, res, next, params);
};

module.exports = {
  login,
  getUserInfo,
  getUsers,
  getUser,
  createUser,
  updateProfile,
  updateAvatar,
};
