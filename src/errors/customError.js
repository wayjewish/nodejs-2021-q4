class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = 'CustomError';
    this.isCustom = true;
  }
}

module.exports = CustomError;
