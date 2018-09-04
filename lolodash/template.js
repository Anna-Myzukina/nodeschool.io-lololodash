//Exercise 9  [ _.template(text)(data)]

/*To get started, use the template() function to interpolate
a simple var for us:

    { name: "Foo",
      login: [ 1407574431, 140753421 ]
    }

We want a simple string greeting the user by name and showing the
number of times the user has logged in (every timestamp represents
one login). Your function should return a String like this:

    Hello Foo (logins: 2)
 */

var _ = require('lodash');

var worker = function(list){
	var str = ''; 
    
    var temp =
     _.template('Hello <%= name %> (logins: <%= logins %>)')({'name' : list.name, 'logins' : list.login.length})
	
	return temp;
	
}

module.exports = worker;