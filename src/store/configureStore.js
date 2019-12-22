import { createStore, combineReducers } from "redux";
import expensesReducer from '../reducers/expense-reduc'
import filtersReducer from '../reducers/filters-reduc'

// Create Store
// Export it is a default function


export default () => {
  const store = createStore(
    // Object with (2) propeties - each reducer we want to reference
    combineReducers({
      expenses: expensesReducer,
      filters: filtersReducer
    })
  );

  return store;
};