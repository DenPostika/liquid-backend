const express = require('express');
const db = require('./config/db');
const bodyParser = require('body-parser');
const app = express();
const server = app.listen((process.env.PORT || 8000), () => {
    console.log('API are live');
});
const io = require('socket.io').listen(server);
const MongoClient = require('mongodb').MongoClient;

global.__basedir = __dirname;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

exports.io = function () {
    return io;
};

MongoClient.connect(db.url, (err, database) => {
    if (err) return console.log(err);

    db_init = database.db('liquid');
    require('./app/routes')(app, db_init, io);

    io.on('connection', function (socket) {
        socket.on('lamps', function (data) {
            io.emit('lampsData', data)
        })
    });
});
