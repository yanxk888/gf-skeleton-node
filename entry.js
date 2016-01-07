if (process.env['NODE_ENV'] === 'dev') {
  	console.log('Used Dev Env');
  	require('node-env-file')('./config/env/dev');
}
require('./server');
