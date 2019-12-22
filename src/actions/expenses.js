import uuid from 'uuid'

// Break up actions into seperate files
// 1. import dependecies
// 2. Name export the functions

// <---- Action Generator Functions ---->

// ADD_EXPENSE
export const addExpense = (
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
export const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id: id
})

// EDIT_EXPENSE
// 1. What do I want to pass in from the dispatch call below? I am passing in expenseTwo.expense.id and amount: 1000
// 2. The object that is returned is passed to the reducer function as the "action" parameter

export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})