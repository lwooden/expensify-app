import React from 'react'
import { connect } from 'react-redux'
import ExpenseListItem from '../components/ExpenseListItem'
import selectExpenses from '../selectors/expenses'

// Stateless Functional Component
// Define How I Want To Render Things

const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>
        {props.expenses.map((expense) => {
            return <ExpenseListItem key={expense.id} {...expense} />
        })}
    </div>
)

// High Order Component
const mapStateToProps = (state) => {
  // Gain access to the Redux Store
  // Return the piece(s) of state that I want
  return {
    // expenses: state.expenses,
    // filters: state.filters
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

// Export the "Connected" version of the Compenent so data from the store can be rendered
// mapStateToProps = the things I want off of the store
// ExpenseList = the component I want to created a "connected" version of

export default connect(mapStateToProps)(ExpenseList)


