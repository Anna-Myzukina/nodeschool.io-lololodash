//Exersise 1 [_.filter(collection, [predicate=_.identity])]
/*We have an array of Javascript Objects representing some users in the following format:

    [
        { id: 22, username: "martin", active: true},
        { id: 23, username: "max",    active: false},
        { id: 24, username: "linda",  active: false}
    ]

Please write a function that takes such a list as its first argument and give back only
the active users (active === true).
*/

var _ = require('lodash');

var worker = function(collection){
	return _.filter(collection, {active : true});
}

module.exports = worker;