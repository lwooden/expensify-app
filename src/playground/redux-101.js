import { createStore } from 'redux'

// 1. Create the Redux Store
// 2. Set a default state value
// 3. Check the current state value using getState()

const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT": // when action.type === INCREMENT, add 1
      return {
        count: state.count + 1
      };
    case "DECREMENT":
      return {
        count: state.count - 1
      };
    case "RESET":
      return {
        count: (state.count = 0)
      };
    default:    // default action return state as is
      return state;
  }
});


console.log(store.getState());

// Actions - objects that get "dispatched" to the Redux Store
// When fired it calls the createStore() function to invoke changes
store.dispatch({
  type: "INCREMENT"
});

console.log(store.getState());

store.dispatch({
  type: "DECREMENT"
});

store.dispatch({
  type: "INCREMENT"
});

store.dispatch({
  type: "INCREMENT"
});

console.log(store.getState());

store.dispatch({
  type: "RESET"
});

console.log(store.getState());

