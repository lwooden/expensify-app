import React from 'react'

// Goal - Create a reuseable component that will allow me to create and edit expenses
// 1. Create a class component because I will need alot of functionality
// 2. Export it for use in the AddExpense component
// 3. Make sure it renders to the screen

export default class ExpenseForm extends React.Component {

  state = {
      description: '',
      note: '',
      amount: ''
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

      if (amount.match(/^\d*(\.\d{0,2})?$/)) {
        this.setState(() => ({ amount }))
      }
  }
  

  render() {
    return (
        <div>
            <form>
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