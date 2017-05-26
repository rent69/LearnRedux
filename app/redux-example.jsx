var redux = require('redux');

console.log('Starting redux-example');

var reducer = (state = {name: 'Anonymous'}, action) => {     //ES6 syntax
//  state = state || {name: 'Anonymous'};   ES5 syntax
switch (action.type) {
  case 'CHANGE_NAME':
    return {
      ...state,
      name: action.name
    };
   default:
     return state;
  }
};
var store = redux.createStore(reducer);

var currentState = store.getState();
console.log('currentState', currentState);

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Rent'
});

console.log('Name should be Rent', store.getState());
