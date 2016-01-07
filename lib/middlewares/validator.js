'use strict';

/*
  https://github.com/ctavan/express-validator
 */

var expressValidator = require('express-validator');

module.exports = function () {

  	var options = {
    	errorFormatter: function (param, msg, value) {
        	var namespace = param.split('.')
        , root = namespace.shift()
        , formParam = root;
      	while (namespace.length) {
        	formParam += '[' + namespace.shift() + ']';
      }
      	return {
        	error : formParam,
        	msg   : msg,
        	value : value
      };
    },
    	customValidators: {
       	isArray: function (value) {
        	return Array.isArray(value);
       },
       	gte: function (param, num) {
        	return param >= num;
       }
    }
  };

  /*return function(req, res, next) {
    console.log('here is valdiator middleware');
    next();
  };*/

  // create the actual middleware
  	return expressValidator(options);
};
