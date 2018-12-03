module.exports = function(app, db) {
  app.post('/consumption', (req, res) => {
    const consumption = {
      water_left: 17,
      date: new Date(),
      poured: req.body.poured,
    };
    db.collection('consumptions').insert(consumption, (err, result) => {
      if (err) {
        res.send({ error: err });
      } else {
        res.send(result.ops[0]);
      }
    });
  });
};
