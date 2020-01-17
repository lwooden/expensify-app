import React from 'react'
import { connect } from 'react-redux'
import { removeExpense } from '../actions/expenses'



// Export stateless functional component
// Determine How To Render to Screen

// Goal - Delete an expense by clicking the remove button
// 1. Add button element to the expense item
// 2. Import removeExpense function so I can use it onClick
// 3. Connect the component to the store. I don't need anything from the store so the syntax below works
// 4. Add "id" and "dispatch to the list of props I take in so I can use it in removeExpense
// 5. Add onClick handler and use the "e" object to run dispatch and call removeExpense with "id" as a parameter

const ExpenseListItem = ({ description, amount, createdAt, id, dispatch }) => (
  <div>
    <h3>{description}</h3>
    <p>{amount} - {createdAt}</p>
    <button onClick={() => {
        console.log(id)
         dispatch(removeExpense({ id }))
    }} >Remove</button>
  </div>
);


export default connect()(ExpenseListItem)