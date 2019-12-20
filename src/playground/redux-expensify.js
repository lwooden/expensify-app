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


// <---- Action Generators ---->

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
        default:
            return state
    }
}

// Create Store
const store = createStore(
    // Object with (2) propeties - each reducer we want to reference
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
)

store.subscribe(() => {  // runs everytime state changes
    console.log(store.getState());
});

const expenseOne = store.dispatch((addExpense({ description: "lunch", amount: 100 })))
const expenseTwo = store.dispatch((addExpense({ description: "dog", amount: 500 })))

store.dispatch((removeExpense({ id: expenseOne.expense.id })))

console.log(expenseOne)



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