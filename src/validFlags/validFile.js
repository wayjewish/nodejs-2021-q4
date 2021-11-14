const fs = require('fs');
const CustomError = require('../errors/customError');

const validFile = (path) => {
  try {
    fs.accessSync(path, fs.constants.F_OK);
  } catch (err) {
    throw new CustomError(`There is no file ${path}`);
  }
  try {
    fs.accessSync(path, fs.constants.W_OK);
  } catch (err) {
    throw new CustomError(`There is no write access to the file ${path}`);
  }
};

module.exports = validFile;