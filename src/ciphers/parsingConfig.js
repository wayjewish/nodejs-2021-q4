const configChars = require('../asssets/configChars');

const parsingConfig = (config) => {
  const result = [];
  const arr = config.split(configChars.separator);

  arr.forEach(step => {
    const operation = {
      chiper: step[0],
    };
    if (step[1] === '0') operation.decoding = true;
    if (step[1] === '1') operation.encoding = true;

    result.push(operation);
  });

  return result;
};

module.exports = parsingConfig;
