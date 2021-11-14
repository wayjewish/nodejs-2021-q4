const flags = require('../asssets/flags');
const CustomError = require('../errors/customError');

const parsingFlags = (argv) => {
  let result = {};

  argv.forEach((argvFlag, argvIndex) => {
    Object.keys(flags).forEach(key => {
      const flag = flags[key];
      if (flag.includes(argvFlag)) {
        if (result[key]) throw new CustomError(`Flag double ${key}`);
        if (!argv[argvIndex + 1]) throw new CustomError(`Empty value for the flag ${key}`);
        result[key] = argv[argvIndex + 1];
      }
    });
  });

  return result;
};

module.exports = parsingFlags;