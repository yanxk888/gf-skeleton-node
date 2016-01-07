/*
* @Author: gaohailang
* @Date:   2016-01-07 16:27:50
* @Last Modified by:   gaohailang
* @Last Modified time: 2016-01-07 17:00:18
*/

'use strict';

module.exports = {
  	logErr(err, str) {
    // Todo: bind debug
  },
  	assertPagintionQuery(req) {
    	req.assert('page', 'Invalid page').notEmpty().isInt();
    	req.assert('size', 'Invalid size').notEmpty().isInt();
  },
  	isErrReturn(req, res) {
    	var errors = req.validationErrors();
    	if (!errors) return false;
    	res.send({
      	error: errors[0].msg
    }, 400);
    	return true;
  }
};
