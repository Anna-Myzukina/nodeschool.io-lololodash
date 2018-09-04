//Exercise 3   [_.forEach(collection, [iteratee=_.identity])]
/*Please write a function that takes in a hashtable or associative array of
European towns with their populations in millions:

    { Hamburg:    { population: 1.698 },
      Strasbourg: { population: 0.272 },
      Rome:       { population: 2.753 },
      Dublin:     { population: 0.528 } }

We want a new size attribute added to every town where the value depends on
the town's population, as follows:

    { City1: {population: 1.58, size: 'big'  },
      City2: {population: 0.58, size: 'med'  },
      City3: {population: 0.28, size: 'small'} }

Attention: the list could also be an Array, so you will have to use a
collection function.

Use the following guidelines:

  * All cities having a population over 1 million are "big".
  * Cities having a population less than 1 million but more than 0.5 million are "med".
  * All cities having a population less than 0.5 million are "small"
 */

var _ = require('lodash');

var worker = function(collection){
	return _.forEach(collection, function(item) {
		if(item.population > 1){
			item.size = 'big';
		}else if(item.population < 1 && item.population > 0.5){
			item.size = 'med';
		}else{
			item.size = 'small';
		}
	});
}

module.exports = worker;