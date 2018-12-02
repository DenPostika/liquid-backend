module.exports = function(app, db, io) {
  app.get('/online', (req, res) => {
    db.collection('statuses', (err, collection) => {
      collection
        .find({ type: 'online' })
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
