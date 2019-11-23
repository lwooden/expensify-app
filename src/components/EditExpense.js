import React from 'react'

const EditExpensePage = (props) => {
  console.log(props) // inspect default props that are passed down by react-router "Route" component
  return (
    <div>
      Editing expense with id of {props.match.params.id}
    </div>
  )
}

export default EditExpensePage
