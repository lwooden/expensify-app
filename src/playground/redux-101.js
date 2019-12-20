import { createStore } from "redux";




// <---- Action Generators ---->
const incrementCount = (payload = {}) => {
    return {
        type: 'INCREMENT',
        incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy : 1
    }
}

const decrementCount = (payload = {}) => {
    return {
        type: 'DECREMENT',
        decrementBy: typeof payload.decrementBy === 'number' ? payload.decrementBy : 1
    }
}

const resetCount = () => {
  return {
    type: 'RESET',
    count: 0
  }
}

const setCount = (payload = {}) => {
  return {
    type: 'SET',
    count: payload.count
  }
}

// Reducers
// 1. Reducers are pure functions - they do not modify/change anything outside of it's scope; depends entirely upon what it receives
// 2. Never change state or action

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT": // when action.type === INCREMENT, add 1
    //const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1  
      return {
        count: state.count + action.incrementBy
      };
    case "DECREMENT":
        const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1
      return {
        count: state.count - decrementBy
      };
    case "SET":
        return {
            count: action.count
        }
    case "RESET":
      return {
        count: (state.count = 0)
      };
    default:
      // default action return state as is
      return state;
  }
}

// 1. Create the Redux Store
// 2. Set a default state value
// 3. Check the current state value using getState()

const store = createStore(countReducer)


store.subscribe(() => {  // runs everytime state changes
  console.log(store.getState());
});

// Actions - objects that get "dispatched" to the Redux Store
// When fired it calls the createStore() function to invoke changes

//  <---- In-line Action Object ---->

// store.dispatch({
//   type: "INCREMENT",
//   incrementBy: 5
// });

// store.dispatch({
//   type: "DECREMENT",
//   decrementBy: 5
// });

// store.dispatch({
//   type: "RESET"
// });

// store.dispatch({
//     type: "SET",
//     count: 100
//   });

//  <---- Action Generators - Preferred Method ---->

// Passing in argument to "payload" in the method definition (payload.incrementBy)
store.dispatch((incrementCount({ incrementBy: 5 })));
store.dispatch((incrementCount()));

store.dispatch((decrementCount()));

store.dispatch((resetCount()));

store.dispatch((setCount({ count: 200 })))

// console.log(store.getState());
