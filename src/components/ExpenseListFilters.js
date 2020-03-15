import React from "react";
import { connect } from "react-redux";
import {
  setTextFilter,
  sortByAmount,
  sortByDate,
  setStartDate,
  setEndDate
} from "../actions/filters";
import { SingleDatePicker, DateRangePicker } from "react-dates";

// 1. This component needs to be rendered inside of the ExpenseDashboard component
// 2. This component needs access to the store in order to determine the current filter property
// so I need to create a "connected" version of the component
// 3. Pass props into the component and render the data that I need

// switch to class based component
// must add "this" binding to use props in class based component

class ExpenseListFilters extends React.Component {
  state = {
    calenderFocused: null
  };

  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setStartDate(endDate));
  };

  onFocusChange = (calenderFocused) => { 
    this.setState(() => ({ calenderFocused }))}

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.filters.text}
          onChange={e => {
            this.props.dispatch(setTextFilter(e.target.value));
            console.log(e.target.value);
          }}
        />
        <select
          value={this.props.filters.sortBy}
          onChange={e => {
            if (e.target.value === "date") {
              this.props.dispatch(sortByDate());
            } else if (e.target.value === "amount") {
              this.props.dispatch(sortByAmount());
            }
          }}
        >
          <option value="data">Date</option>
          <option value="amount">Amount</option>
        </select>
        <DateRangePicker
          startDate={this.props.filters.startDate}
          endDate={this.props.filters.endDate}
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calenderFocused}
          onFocusChange={this.onFocusChange}
          showClearDates={true}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
      </div>
    );
  }
}

// const ExpenseListFilters = (props) => (
//     <div>
//       <input
//         type="text"
//         value={props.filters.text}
//         onChange={(e) => {
//           props.dispatch(setTextFilter(e.target.value))
//           console.log(e.target.value)
//       }}
//       />
//       <select
//         value={props.filters.sortBy}
//         onChange={(e) => {
//           if (e.target.value === "date") {
//             props.dispatch(sortByDate())
//           } else if (e.target.value === "amount") {
//             props.dispatch(sortByAmount())
//           }
//       }}
//       >
//           <option value="data">Date</option>
//           <option value="amount">Amount</option>
//       </select>
//     </div>
//   )

// High Order Component
const mapStateToProps = state => {
  return {
    filters: state.filters
  };
};

export default connect(mapStateToProps)(ExpenseListFilters);
