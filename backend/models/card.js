const mongoose = require('mongoose');
const isURL = require('validator/lib/isURL');
const user = require('./user');

const cardSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 2,
    maxlength: 30,
    required: true,
  },
  link: {
    type: String,
    validate: {
      validator(avatar) {
        return isURL(avatar);
      },
      message: 'Неправильный формат ссылки',
    },
    required: true,
  },
  owner: {
    type: mongoose.Schema.Types.Object,
    ref: user,
    required: true,
  },
  likes: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: user,
    default: [],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('card', cardSchema);
