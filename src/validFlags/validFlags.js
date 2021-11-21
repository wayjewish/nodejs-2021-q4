const flags = require('../asssets/flags');
const parsingFlags = require('./parsingFlags');
const CustomError = require('../errors/customError');
const parsingConfig = require('./parsingConfig');
const validFile = require('./validFile');


const validFlags = (argv) => {
  const parseFlags = parsingFlags(argv);
  const result = { ...parseFlags };

  if (!parseFlags.config) throw new CustomError('The config is missing');
  Object.keys(parseFlags).forEach(key => {
    const value = parseFlags[key];
    if (key === 'config') {
      result.config = parsingConfig(value);
    }
    if (key === 'input' || key === 'output') {
      validFile(value);
    }
  });

  return result;
};

module.exports = validFlags;
