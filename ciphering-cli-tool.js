const validFlags = require('./src/validFlags/validFlags');
const errorHandler = require('./src/errors/errorHandler');
const encryption = require('./src/ciphers/encryption');

try {
  const params = validFlags(process.argv.slice(2));
  encryption(params);
} catch(e) {
  errorHandler(e);
}
