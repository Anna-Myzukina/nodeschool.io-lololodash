//Exercise 8  [_.filter(collection, [callback=identity])]

/*We have the income of a few freelancers in an Array of Objects:

    [ { name: "mike",  income: 2563 },
      { name: "kim",   income: 1587 },
      { name: "liz",   income: 3541 },
      { name: "tom",   income: 2475 },
      { name: "bello", income: 987  },
      { name: "frank", income: 2975 } ]

Please write a function that:

  * Calculates the average income across all of the freelancers.
  * Puts the freelancers into two groups:

underperform their income is less than or equal to the average income.
overperform their income is greater than the average income.

  * Sorts the freelancers within the two groups by their income with the lowest first.
  * Returns an Object in the following form:

    {
        "average": 167,
        "underperform": [
            { "name": "foobar", "income": 99 },
            { "name": "dummy", "income": 100 }
        ],
        "overperform": [
            { "name": "foo", "income": 302 }
        ]
    }
 */
var _ = require('lodash');

var worker = function (list) {
    var avg = 0, sum = 0, obj = {};
    _.forEach(list, function (val) {
        return sum += val.income;
    });
    avg = sum / list.length;

    var under = _.filter(list, function (num) {
        return num.income <= avg;
    });

    var over = _.filter(list, function (num) {
        return num.income > avg;
    });

    obj.average = avg;
    obj.underperform = _.sortBy(under, 'income');
    obj.overperform = _.sortBy(over, 'income')

    return obj;

}

module.exports = worker;