function AsyncWrap(requestHandler) {
  return (req, res, next) => {
    requestHandler(req, res, next).catch(next);
  };
}

module.exports = AsyncWrap;
