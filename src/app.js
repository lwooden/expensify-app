import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter from '../src/routers/AppRouter'
import { Provider } from 'react-redux' // Provides the Redux Store to all of my components

import 'normalize.css/normalize.css'
import './styles/styles.scss'

import configureStore from '../src/store/configureStore'
import { addExpense } from '../src/actions/expenses'
import { setTextFilter } from '../src/actions/filters'
import getVisibleExpenses from '../src/selectors/expenses'

import './firebase/firebase' // runs the database file


const store = configureStore() // Define Redux Store


store.dispatch(addExpense({ description: "water bill", amount: 100, createdAt: -1000 }))
store.dispatch(addExpense({ description: "gas bill", amount: 57, createdAt: 1000 }))
store.dispatch(addExpense({ description: "mortgage", amount: 2740, createdAt: 2000 }))
// store.dispatch(setTextFilter('bill'))

// setTimeout(() => {
//     store.dispatch(setTextFilter('water'))
// }, 3000)


const state = store.getState()
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
console.log(visibleExpenses)
console.log(store.getState());

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'))