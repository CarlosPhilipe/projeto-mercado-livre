const author = async (req, _, next) => {
  req.author = {
    name: "Carlos",
    lastname: "Bahia",
  };

  return next();
};

module.exports = author;
