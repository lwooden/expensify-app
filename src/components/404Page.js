import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => (
    <div>
      404 - <Link to="/">Go Home</Link> {/* enables client-side routing -> new call to ReactDOM.render() instead of full refresh */}
    </div>
)

export default NotFoundPage
  