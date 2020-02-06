import React from 'react'
import { connect } from 'react-redux'
import ExpenseForm from '../components/ExpenseForm'
import { addExpense } from '../actions/expenses'

// 1. Import connect so component can have access to the store
// 2. Create a "connected" version of the component
// 3. Wire up props so I can access dispatch method
// 4. Import addExpense from action folder
// 5. Take new expense object and dispatch it to store using addExpense function

const AddExpensePage = (props) => (
    <div>
    <h1>Add Expense</h1>
      <ExpenseForm 
        onSubmit={(expense) => {
          console.log(expense)
          props.dispatch(addExpense(expense))
          props.history.push('/') // automatically redirects me to the page I want the user to go to
        }}
      />
    </div>
  )

export default connect()(AddExpensePage)