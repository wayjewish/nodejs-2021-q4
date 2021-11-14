const configChars = require('../asssets/configChars');
const CustomError = require('../errors/customError');

const checkValidChars = (str, arrValidChars) => {
  const arr = str.split('');
  arr.forEach(char => {
    if (!arrValidChars.includes(char)) {
      throw new CustomError('Invalid config');
    }
  });
}

const validConfig = (config) => {
  checkValidChars(config, [...configChars.ciphers, ...configChars.mode, configChars.separator]);

  const arr = config.split(configChars.separator);
  arr.forEach(step => {
    if (step === '') throw new CustomError('Invalid config');
    switch (step[0]) {
      case 'C':
        if (!step[1] || step[1] !== '0' && step[1] !== '1') throw new CustomError('Invalid config');
        break;
      case 'R':
        if (!step[1] || step[1] !== '0' && step[1] !== '1') throw new CustomError('Invalid config');
        break;
      case 'A':
        if (step[1]) throw new CustomError('Invalid config');
        break;
    }
  });
};

module.exports = validConfig;