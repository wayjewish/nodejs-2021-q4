const fs = require('fs');
const CustomError = require('../errors/customError');

const validFile = (path) => {
  try {
    fs.accessSync(path, fs.constants.F_OK);
  } catch (err) {
    throw new CustomError(`Нет файла ${path}`);
  }
  try {
    fs.accessSync(path, fs.constants.W_OK);
  } catch (err) {
    throw new CustomError(`Нет доступа к записи в файл ${path}`);
  }
};

module.exports = validFile;