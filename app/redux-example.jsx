 var redux = require('redux');

console.log('Starting redux-example');

var actions = require('./actions/index');
var store = require('./store/configureStore').configure();

// subscribe to changes
//store.subscribe(() => {
var unsubscribe = store.subscribe(() => {
  var state = store.getState();

//  console.log('Name is', state.name);
//  document.getElementById('app').innerHTML = state.name;

  console.log('New state', store.getState());

  if (state.map.isFetching) {
    document.getElementById('app').innerHTML = 'Loading...';
  } else if (state.map.url) {
    document.getElementById('app').innerHTML = '<a href="' + state.map.url + '" target="_blank">View Your Location</a>'
  }
});
// unsubscribe();

var currentState = store.getState();
console.log('currentState', currentState);

store.dispatch(actions.fetchLocation());

store.dispatch(actions.changeName('Lex'));

store.dispatch(actions.addHobby('Running'));
store.dispatch(actions.addHobby('Walking'));
store.dispatch(actions.removeHobby(2));

store.dispatch(actions.changeName('Rob'));

store.dispatch(actions.addMovie('Terminator', 'Science Fiction'));
store.dispatch(actions.addMovie('Tootsie','Comedy'));
store.dispatch(actions.removeMovie(1));
