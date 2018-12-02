module.exports = function(app, db) {
  app.get('/consumptions', (req, res) => {
    db
      .collection('consumptions')
      .find({
        date: {
          $gte: new Date(new Date().getTime() - 5 * 24 * 60 * 60 * 1000),
        },
      })
      .toArray((err, result) => {
        res.json(result);
      });
  });
};
