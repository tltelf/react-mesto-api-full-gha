require('dotenv').config();

const {
  PORT = 3000,
  NODE_ENV,
  JWT_SECRET,
} = process.env;

module.exports = {
  PORT,
  NODE_ENV,
  JWT_SECRET,
  URL: 'mongodb://127.0.0.1:27017/mestodb',
  allowedCors: {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: ['Content-Type', 'authorization'],
  },
};
