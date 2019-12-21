import { createStore, combineReducers } from "redux";
import uuid from "uuid"

// Need to create seperate reducers for each of the following actions:
// ADD_EXPENSE
// REMOVE_EXPENSE
// EDIT_EXPENSE
// SET_TEXT_FILTERS
// SORT_BY_DATE
// SORT_BY_AMOUNT
// SET_BY_START
// SET_BY_END


// <---- Action Generator Functions ---->

// ADD_EXPENSE
const addExpense = (
    {
        description = "",
        note = "",
        amount = 0,
        createdAt = 0
    } = {}
) => ({
  type: 'ADD_EXPENSE',
  expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
  }
});

// REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id: id
})

// EDIT_EXPENSE
// 1. What do I want to pass in from the dispatch call below? I am passing in expenseTwo.expense.id and amount: 1000
// 2. The object that is returned is passed to the reducer function as the "action" parameter

const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})

// SET_FILTER
const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
})


// SORT_BY_AMOUNT
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT',
    sortBy: 'amount'
})


// SORT_BY_DATE
const sortByDate = () => ({
    type: 'SORT_BY_DATE',
    sortBy: 'date'
})

// SET_BY_START
const setStartDate = (date = undefined) => ({
    type: 'SET_BY_START',
    startDate: date
})

// SET_BY_END
const setEndDate = (date = undefined) => ({
    type: 'SET_BY_END',
    endDate: date
})




// <---- Reducer Definitions ---->

// Expenses Reducer
const expensesReducerDefaultState = []

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state, // ES6 Spread Operator - take all of the current items in the array and store them at this index
                action.expense // add the new item after the current items
            ]
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => {
                return id !== action.id
            })
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    }
                } else {
                    return expense // do nothing
                }
            })
        default: 
            return state
    }
}

// Filters Reducer
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_TEXT_FILTER":
      return {
        ...state,
        text: action.text
      };
    case "SORT_BY_AMOUNT":
      return {
        ...state,
        sortBy: action.sortBy
      };
    case "SORT_BY_DATE":
      return {
        ...state,
        sortBy: action.sortBy
      };
    case "SET_BY_START":
      return {
        ...state,
        startDate: action.startDate
      };
    case "SET_BY_END":
      return {
        ...state,
        endDate: action.endDate
      };
    default:
      return state;
  }
};

// <---- Get Visible Expenses ---->

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate  }) => {
    return expenses
      .filter(expense => {
        const startDateMatch =
          typeof startDate !== "number" || expense.createdAt >= startDate;
        const endDateMatch =
          typeof endDate !== "number" || expense.createdAt <= endDate;
        const textMatch = expense.description
          .toLowerCase()
          .includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
      })
      .sort((a, b) => {
        if (sortBy === "date") {
          return a.createdAt > b.createdAt ? 1 : -1;
        } else if (sortBy === "amount") {
          return a.amount < b.amount ? 1 : -1;
        }
      });
}

// <---- Redux Store Creation ---->

// Create Store
const store = createStore(
    // Object with (2) propeties - each reducer we want to reference
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
)




// Runs everytime state changes
store.subscribe(() => {  
    const state = store.getState()
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    // console.log(store.getState());
    console.log(visibleExpenses)
});


// REMEMBER !!!!
// When Actions are fired a call to the createStore() function is made to manipulate state

const expenseOne = store.dispatch((addExpense({ description: "lunch", amount: 100, createdAt: 1000})))
const expenseTwo = store.dispatch((addExpense({ description: "dog", amount: 500, createdAt: -1000 })))

// store.dispatch((removeExpense({ id: expenseOne.expense.id })))
// store.dispatch((editExpense(expenseTwo.expense.id, { amount: 1000 })))

// store.dispatch((setTextFilter('lu')))
// store.dispatch((setTextFilter()))

store.dispatch((sortByAmount()))
// store.dispatch((sortByDate()))

// store.dispatch((setStartDate(0)))
// store.dispatch((setStartDate()))
// store.dispatch((setEndDate(999)))
// store.dispatch((setEndDate()))

// console.log(expenseOne)










 // <--- Spread Object Operator Example --->
// const user = {
//     name: 'Low',
//     age: 29
// }

// console.log(user) 

// console.log({
//     ...user, // grabs the current properties of the user object
//     location: "barbershop", // adds a new property to the user object
//     age: 31 // overrides the previous value for age in the user object
// })




const demoState = {
    expenses: [{
        id: "1232eeweerwr",
        description: "Working Lunch",
        note: "Took SRC owner to lunch",
        amount: 97,
        createdAt: 0
    }],
    filters: {
        text: "lunch",
        sortBy: "amount",
        startDate: undefined,
        endDate: undefined
    }
}