var express = require('express');
var router  = express.Router();
var natural = require('natural');


router.get('/', (req, res, next) => {
	var classifier = new natural.BayesClassifier();
	classifier.addDocument('i am long qqqq', 'buy');
	classifier.addDocument('buy the q\'s', 'buy');
	classifier.addDocument('short gold', 'sell');
	classifier.addDocument('sell gold', 'sell');
	classifier.train();

	console.log(classifier.classify('i am short silver '));
	console.log(classifier.classify('i am long copper'));
	res.render('index');
});

module.exports = router;