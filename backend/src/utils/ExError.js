class ExError extends Error {
  constructor(
    message = "Something went wrong!",
    statusCode = 500,
    status = false
  ) {
    super(message);

    this.message = message;
    this.statusCode = statusCode;
    this.status = status;
  }
}

module.exports = ExError;
