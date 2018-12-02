module.exports = function(app, db, io) {
  app.get('/warning', (req, res) => {
    db.collection('statuses', (err, collection) => {
      collection
        .find({ type: 'warning' })
        .sort({ $natural: -1 })
        .limit(1)
        .next()
        .then(
          doc => {
            res.json(doc);
          },
          err => {
            console.log('Error:', err);
          },
        );
    });
  });
};
