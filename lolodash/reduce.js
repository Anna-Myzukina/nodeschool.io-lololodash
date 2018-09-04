//Exercise 7 [_.reduce(collection, [callback=identity], [accumulator])]

/*We have an Array recording orders made at a store.

    [ { article: 1, quantity: 4 },
      { article: 2, quantity: 2 },
      { article: 1, quantity: 5 } ]

As you can see in this example data, "1" was ordered twice. We want
to know the total quantities ordered for each article.

Please write a function that:

  * Calculates the total number of orders for each article.
  * Sorts the resulting array so that the articles with the highest number of orders are on top

    [ { article: 1, total_orders: 9 },
      { article: 2, total_orders: 2 } ]
 */
const _ = require("lodash");

const overview = function (orders) {

    var overviewarray = [],
        total = 0;

    // Group by article
    orders = _.groupBy(orders, 'article');

    _.forEach(orders, function (item, key) {

        key = parseInt(key);
        total = 0;

        // If only one article
        if (item.length === 1) {
            total = item[0].quantity;

            // Else make sum of all orders
        } else {
            total = _.reduce(item, function (sum, item) {
                return sum + item.quantity;
            }, 0);
        }

        overviewarray.push({
            article: key,
            total_orders: total
        });

    });

    // Order
    overviewarray = _.sortBy(overviewarray, "total_orders").reverse();

    return overviewarray;
};

module.exports = overview;