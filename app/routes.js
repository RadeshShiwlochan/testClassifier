var express = require('express');
var router  = express.Router();
var natural = require('natural');


router.get('/', (req, res, next) => {
	var classifier = new natural.BayesClassifier();
	classifier.addDocument('i am long qqqq', 'buy');
	classifier.addDocument('buy the q\'s', 'buy');
	classifier.addDocument('short gold', 'sell');
	classifier.addDocument('sell gold', 'sell');
	classifier.addDocument('the owner of the company', 'person');
	classifier.addDocument('the president of the company', 'person');
	classifier.train();

	console.log(classifier.classify('i am short silver '));
	console.log(classifier.classify('i am long copper'));
	console.log(classifier.classify('gold owner'));
	res.render('index');
});

module.exports = router;