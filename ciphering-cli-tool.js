const validFlags = require('./src/validFlags/validFlags');
const errorHandler = require('./src/errors/errorHandler');
const encryption = require('./src/ciphers/encryption');

try {
  console.log(process.argv);
  const params = validFlags(process.argv.slice(2));
  console.log(params);
  encryption(params);
} catch(e) {
  errorHandler(e);
}
