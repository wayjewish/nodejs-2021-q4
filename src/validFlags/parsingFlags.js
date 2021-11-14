const flags = require('../asssets/flags');
const CustomError = require('../errors/customError');

const parsingFlags = (argv) => {
  let result = {};

  argv.forEach((argvFlag, argvIndex) => {
    Object.keys(flags).forEach(key => {
      const flag = flags[key];
      if (flag.includes(argvFlag)) {
        if (result[key]) throw new CustomError(`Дубль флага ${key}`);
        if (!argv[argvIndex + 1]) throw new CustomError('Пустое значение для флага');
        result[key] = argv[argvIndex + 1];
      }
    });
  });

  return result;
};

module.exports = parsingFlags;