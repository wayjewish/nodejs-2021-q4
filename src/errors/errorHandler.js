const errorHandler = (err) => {
  if (err.isCustom) {
    process.stdout.write(err.message);
    process.exit(1);
  } else {
    throw err;
  }
};

module.exports = errorHandler;
