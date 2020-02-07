import React from 'react'
import moment from 'moment'
import { SingleDatePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'

// Goal - Create a reuseable component that will allow me to create and edit expenses
// 1. Create a class component because I will need alot of functionality
// 2. Export it for use in the AddExpense component
// 3. Make sure it renders to the screen

const now = moment()
console.log(now.format('MMMM Do YYYY'))

export default class ExpenseForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: false,
            error: ''
        }
    }
  



  onDescriptionChange = (e) => {
      const description = e.target.value
      this.setState(() => ({ description }))
  } 

  onNoteChange = (e) => {
      const note = e.target.value
      this.setState(() => ({ note }))
  }

  onAmountChange = (e) => {
      const amount = e.target.value

      if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
        this.setState(() => ({ amount }))
      }
  }

  onDateChange = (createdAt) => {
      if(createdAt) {
        this.setState(() => ({ createdAt }))
      }
  }

  onFocusChange = ({ focused  }) => {
      this.setState(() => ({ calendarFocused: focused }))
  }

  onSubmit = (e) => {
      e.preventDefault()

      if (!this.state.description || !this.state.amount) {
        this.setState(() => ({ error: "Please add description and amount!" }))
      } else {
          this.setState(() => ({ error: "" }))
          this.props.onSubmit({ 
              // pass data up to the parent component ->  ExpenseForm
              description: this.state.description,
              amount: parseFloat(this.state.amount, 10) * 100,
              createdAt: this.state.createdAt.valueOf(),
              note: this.state.note
          })
          console.log("Expense submitted!")
      }
  }
  

  render() {
    return (
        <div>
            {this.state.error && <p>{this.state.error}</p>}
            <form onSubmit={this.onSubmit}>
                <input
                type="text"
                placeholder="description"
                autoFocus
                value={this.state.description}
                onChange={this.onDescriptionChange}
                />
                <input  
                type="number"
                placeholder="amount"   
                value={this.state.amount} 
                onChange={this.onAmountChange}
                />
                <SingleDatePicker
                date={this.state.createdAt}
                onDateChange={this.onDateChange}
                focused={this.state.calendarFocused}
                onFocusChange={this.onFocusChange}
                numberOfMonths={1}
                isOutsideRange={() => false}
                />
                <textarea
                placeholder="Add a note for your expense"
                value={this.state.note}
                onChange={this.onNoteChange}
                >
                </textarea>
                <button>Add Expense</button>
            </form>
        </div>
    )
  }
}