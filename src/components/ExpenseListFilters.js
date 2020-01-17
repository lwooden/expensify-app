import React from 'react'
import { connect } from 'react-redux'
import { setTextFilter, sortByAmount, sortByDate } from '../actions/filters'

// 1. This component needs to be rendered inside of the ExpenseDashboard component
// 2. This component needs access to the store in order to determine the current filter property
// so I need to create a "connected" version of the component
// 3. Pass props into the component and render the data that I need

const ExpenseListFilters = (props) => (
    <div>
      <input 
        type="text" 
        value={props.filters.text} 
        onChange={(e) => {
          props.dispatch(setTextFilter(e.target.value))
          console.log(e.target.value)
      }}    
      />
      <select 
        value={props.filters.sortBy} 
        onChange={(e) => {
          if (e.target.value === "date") {
            props.dispatch(sortByDate())
          } else if (e.target.value === "amount") {
            props.dispatch(sortByAmount())
          }
      }}
      >
          <option value="data">Date</option>
          <option value="amount">Amount</option>
      </select>
    </div>
  )



// High Order Component
const mapStateToProps = (state) => {
    return {
      filters: state.filters
    };
  };

export default connect(mapStateToProps)(ExpenseListFilters)