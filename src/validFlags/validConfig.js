const configChars = require('../asssets/configChars');
const CustomError = require('../errors/customError');

const checkValidChars = (str, arrValidChars) => {
  const arr = str.split('');
  console.log(arrValidChars, arr);
  arr.forEach(char => {
    if (!arrValidChars.includes(char)) {
      throw new CustomError('Не валидный конфиг1');
    }
  });
}

const validConfig = (config) => {
  checkValidChars(config, [...configChars.ciphers, ...configChars.mode, configChars.separator]);

  const arr = config.split(configChars.separator);
  arr.forEach(step => {
    if (step === '') throw new CustomError('Не валидный конфиг2');
    switch (step[0]) {
      case 'C':
        if (!step[1] || step[1] !== '0' && step[1] !== '1') throw new CustomError('Не валидный конфиг3');
        break;
      case 'R':
        if (!step[1] || step[1] !== '0' && step[1] !== '1') throw new CustomError('Не валидный конфиг4');
        break;
      case 'A':
        if (step[1]) throw new CustomError('Не валидный конфиг5');
        break;
    }
  });
};

module.exports = validConfig;