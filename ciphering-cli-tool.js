const validFlags = require('./src/validFlags/validFlags');
const errorHandler = require('./src/errors/errorHandler');

try {
  validFlags(process.argv.slice(2));
} catch(e) {
  errorHandler(e);
}
