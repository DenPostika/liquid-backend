const postStatuses = require('./postStatuses');
const getOnlineStatus = require('./getOnlineStatus');
const postConsumptions = require('./postConsumptions');
const getLastWarning = require('./getLastWarning');
const getLastConsumption = require('./getLastConsumption');

module.exports = function(app, db, io) {
    postStatuses(app, db, io);
    postConsumptions(app, db, io);
    getOnlineStatus(app, db, io);
    getLastWarning(app, db, io);
    getLastConsumption(app, db, io);
};
