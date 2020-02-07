import React from "react";
import { Link } from "react-router-dom"; // create a clickable link that takes you to edit expense page

// Export stateless functional component
// Determine How To Render to Screen

// Goal - Delete an expense by clicking the remove button
// 1. Add button element to the expense item
// 2. Import removeExpense function so I can use it onClick
// 3. Connect the component to the store. I don't need anything from the store so the syntax below works
// 4. Add "id" and "dispatch to the list of props I take in so I can use it in removeExpense
// 5. Add onClick handler and use the "e" object to run dispatch and call removeExpense with "id" as a parameter

const ExpenseListItem = ({ description, amount, createdAt, id }) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    <p>
      {amount} - {createdAt}
    </p>
  </div>
);

export default ExpenseListItem;
