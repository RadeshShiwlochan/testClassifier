'use strict';

var express    = require('express'),
    bodyParser = require('body-parser'),
    path       = require('path'),
    routes     = require('./app/routes'),
    app        = express();

app.set('view engine', 'hbs');
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', routes);


app.listen(3000, () => {
	console.log('listening on Port:3000');
});    