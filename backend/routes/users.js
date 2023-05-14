const usersRouter = require('express').Router();
const { celebrate } = require('celebrate');
const { updateProfileJoi, updateAvatarJoi } = require('../utils/reqValidate');
const {
  getUserInfo,
  updateProfile,
  updateAvatar,
} = require('../controllers/users');

usersRouter.get('/me', getUserInfo);

usersRouter.patch(
  '/me',
  celebrate(updateProfileJoi),
  updateProfile,
);

usersRouter.patch(
  '/me/avatar',
  celebrate(updateAvatarJoi),
  updateAvatar,
);

module.exports = usersRouter;
