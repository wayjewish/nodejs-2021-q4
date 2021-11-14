const validFlags = require('./src/validFlags/validFlags');
const errorHandler = require('./src/errors/errorHandler');
const encryption = require('./src/ciphers/encryption');

try {
  validFlags(process.argv.slice(2));
} catch(e) {
  errorHandler(e);
}

encryption(process.argv.slice(2));
