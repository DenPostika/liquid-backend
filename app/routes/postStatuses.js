module.exports = function(app, db, io) {
  app.post('/status', (req, res) => {
    const status = {
      status: req.body.status,
      date: new Date(),
      type: req.body.type,
    };
    db.collection('statuses').insert(status, (err, result) => {
      if (err) {
        res.send({ error: err });
      } else {
        res.send(result.ops[0]);
      }
    });
    io.emit('status', status);
  });
};
