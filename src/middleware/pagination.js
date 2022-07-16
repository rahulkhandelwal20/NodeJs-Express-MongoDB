const pagination = (model, req, res, next) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  let results = {};

  try {
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    if (endIndex < model.length) {
      results.next = {
        page: page + 1,
        limit: limit,
      };
    }

    if (startIndex > 0) {
      results.previous = {
        page: page - 1,
        limit: limit,
      };
    }
    results.results = model.slice(startIndex, endIndex);
  } catch (error) {
    return next(error);
  }

  return res.json(results);
};
module.exports = { pagination };
