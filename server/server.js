const express = require('express');
const pug = require('pug');
const rootDir = require('app-root-dir').get();
const server = express();

server.set('views', `${__dirname}/views`);
server.engine('html', pug.renderFile);
server.set('view engine', 'html');
server.use( express.static( `${__dirname}/public` ) );
// Bower statics
server.use( express.static( `${rootDir}/bower_components` ) );

server.get('/', function (req, res) {
	res.render('index');
});

server.listen(3000, function () {
	console.log(rootDir);
	console.log('Server running on http://127.0.0.1:3000');
})