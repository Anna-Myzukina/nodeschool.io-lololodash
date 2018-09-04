//Exercise 2 [_.sortBy(collection, [iteratees=[_.identity]])]

/*We have an Array of items sold yesterday like this:

    [{ article: 41,   quantity: 24 },
     { article: 2323, quantity: 2  },
     { article: 655,  quantity: 23 }]

Please write a function that will sort these items by quantity from largest to smallest.
 */

var _ = require('lodash');

var worker = function(collection){
	var sorted = _.sortBy(collection, 'quantity');
	return sorted.reverse();
}

module.exports = worker;