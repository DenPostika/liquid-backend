const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const db = require('./config/db');

const app = express();

const port = process.env.PORT ? process.env.PORT : 8000;

app.use(bodyParser.urlencoded({ extended: true }));

MongoClient.connect(db.url, (err, database) => {
  if (err) return console.log(err);

  db_init = database.db('liquid');
  require('./app/routes')(app, db_init);

  app.listen(port, () => {
    console.log('We are live on ' + port);
  });
});
