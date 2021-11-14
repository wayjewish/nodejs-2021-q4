const flags = require('../asssets/flags');
const parsingFlags = require('./parsingFlags');
const CustomError = require('../errors/customError');
const validConfig = require('./validConfig');
const validFile = require('./validFile');


const validFlags = (argv) => {
  const parseFlags = parsingFlags(argv);

  if (!parseFlags.config) throw new CustomError('Отсутсвует конфиг');
  Object.keys(parseFlags).forEach(key => {
    const value = parseFlags[key];
    if (key === 'config') {
      validConfig(value);
    }
    if (key === 'input' || key === 'output') {
      validFile(value);
    }
  });
};

module.exports = validFlags;
