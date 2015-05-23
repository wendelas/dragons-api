var mongoose  = require('mongoose'),
    debug     = require('debug')('dragons:db'),
    config    = require('config');

'use strict';
function _connection(vars) {
  var username = vars.MONGO_USERNAME || config.get('mongo.username'),
      password = vars.MONGO_PASSWORD || config.get('mongo.password'),
      server   = vars.MONGO_SERVER   || config.get('mongo.server'),
      port     = vars.MONGO_PORT     || config.get('mongo.port'),
      database = vars.MONGO_DATABASE || config.get('mongo.database'),

      auth = username ? /* istanbul ignore next */ username + ':' + password + '@' : '';

  return 'mongodb://' + auth + host + ':' + port + '/' + database;
}

mongoose.connect(_connection(process.env));
var db = mongoose.connection;
/* istanbul ignore next */
db.on('error', function(err) {
  debug(err);
});

db.once('open', function (callback) {
  debug('connected to mongodb');
});

module.exports = mongoose;
