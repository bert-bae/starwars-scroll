const setTtlBySeconds = (days) => {
  return Math.floor(new Date().getTime() / 1000) + days * 24 * 60 * 60;
};

module.exports = {
  setTtlBySeconds,
};
