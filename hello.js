'use strict';
var s = 'Hello';

function greet(name) {
    console.log(s + ',' + name + '!');
}

function getSum(x,y) {
    console.log(x+y);
}


// module.exports = greet;
// module.exports = getSum;

module.exports = {
greet,
getSum
};
