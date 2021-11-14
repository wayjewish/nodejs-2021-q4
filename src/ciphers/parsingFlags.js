const flags = require('../asssets/flags');

const parsingFlags = (argv) => {
  let result = {};

  argv.forEach((argvFlag, argvIndex) => {
    Object.keys(flags).forEach(key => {
      const flag = flags[key];
      if (flag.includes(argvFlag)) {
        result[key] = argv[argvIndex + 1];
      }
    });
  });

  return result;
};

module.exports = parsingFlags;