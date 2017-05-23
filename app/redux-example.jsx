var redux = require('redux');

console.log('Starting redux-example');

//pure function  same input/output  no side-effects/vars or update to vars  no async promises/callbacks
function add (a, b) {
  return a + b;
}

//not a pure function
var a = 3;
function add (b) {
  return  a + b;
}

//also not a pure function
var result;
function add (a,b) {
  result = a + b;
  return result;
}

//also not pure function examples...
function add (a, b) {
  return a + b + new Date().getSeconds();
}

function changeProp(obj) {
  return {
    ...obj,
    name: 'Lex'
  };
  //obj.name = 'rent';
  //return obj;
}
var startingValue = {
  name: 'Rent',
  age: 53
};

var res = changeProp({
  name: 'Rent',
  age: 53
});
console.log(startingValue);
console.log(res);
