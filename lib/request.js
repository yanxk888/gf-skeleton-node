'use strict';

var request = require('request');

var expo = request.defaults({
  	json: true,
  	timeout: 10000
});

module.exports = expo;
