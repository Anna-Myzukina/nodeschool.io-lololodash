//Exercise 5 [_.chain(value)]

/*We have a list of words that we want to modify.

    ['Test', 'Hello', 'World', 'Node', 'JavaScript']

We want to modify each word so that they are all appended with the word Chained, converted to uppercase, and sorted by alphabetical order. The result should look like this:

    ['HELLOCHAINED', 'JAVASCRIPTCHAINED', 'NODECHAINED', 'TESTCHAINED', 'WORLDCHAINED']
 */
var _ = require('lodash');

var worker = function(list){
	return _.chain(list)
			.sortBy(function(a){return a})
			.map(function(a){return a.toUpperCase() + 'CHAINED'})
			.value()
}

module.exports = worker;