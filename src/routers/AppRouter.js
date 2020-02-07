import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Header from '../components/Header'
import ExpenseDashboardPage from '../components/ExpenseDashboard'
import AddExpensePage from '../components/AddExpensePage'
import EditExpensePage from '../components/EditExpensePage.js'
import HelpPage from '../components/HelpPage'
import NotFoundPage from '../components/404Page'

// 1. Create high-level router component 
// 2. Export it to app.js
// 3. Break components out into seperate files
// 4. Import them into high-level router which is then exported to app.js

// Clean. Consistent. Modular

const AppRouter = () => (
    <BrowserRouter>
    {/* Single root element inside of BrowserRouter */}
    <div>
      <Header /> {/* Displayed on every page */}
      <Switch> {/* Processes routes exclusively for betting matching */}
        <Route path="/" component={ExpenseDashboardPage} exact={true} /> {/* must be typed exactly in order to render */}
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit/:id" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
    </BrowserRouter>
)


export default AppRouter