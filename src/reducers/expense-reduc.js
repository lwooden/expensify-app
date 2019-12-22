

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

export default expensesReducer