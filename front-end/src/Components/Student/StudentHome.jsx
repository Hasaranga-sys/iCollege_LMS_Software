import React from 'react'
import { Link } from 'react-router-dom'

const StudentHome = () => {
  return (
    <div>StudentHome
      <Link to="/StudenHome/noticeView">
            <button className="btn btn-primary" variant="contained">notice view</button>
      </Link>
    </div>
  )
}

export default StudentHome