const errorHandler = (err) => {
  const { isCustom, message } = err;

  if (isCustom) {
    process.stdout.write(message);
    process.exit(1);
  } else {
    throw err;
  }
};

module.exports = errorHandler;
