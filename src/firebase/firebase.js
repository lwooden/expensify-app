
// takes all name exports and stores them in variable "firebase"
// I can do this with any file that has multiple named exports and access them from my varible
import * as firebase from 'firebase'

// Example
import * as expenseActions from "../actions/expenses"

// expenseActions.addExpense -- example


const config = {
    apiKey: "AIzaSyAb9qugIpySY0hb3gpWaFPIhbL0neqKELs",
    authDomain: "expensify-f91ea.firebaseapp.com",
    databaseURL: "https://expensify-f91ea.firebaseio.com",
    projectId: "expensify-f91ea",
    storageBucket: "expensify-f91ea.appspot.com",
    messagingSenderId: "296410359785",
    appId: "1:296410359785:web:31a875b729baca00218d78",
    measurementId: "G-F1CZD7NFYL"
  };
  // Initialize Firebase
  firebase.initializeApp(config);

  // ref() - references the root of the database
  // set() - will accept whatever I pass to it and overwrite what is referenced

  firebase.database().ref().set({
      name: 'Lowell Wooden',
      age: 29,
      isMarried: true,
      location: {
          state: "Maryland",
          city: "Upper Marlboro"
      }
  })

// firebase.database().ref('age').set(40)
// firebase.database().ref('location/city').set('Temple Hills')


  firebase.database().ref('attributes').set({
          height: "6'0",
          weight: "175 lbs"
      }
  )

