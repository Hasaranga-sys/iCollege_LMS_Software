import React from 'react'
import { Link } from 'react-router-dom'

const AdminHome = () => {
  return (
    <div>AdminHome
        <Link to="/AdminHome/NoticeTable">
            <button className="btn btn-primary" variant="contained">notice table</button>
        </Link>
        <br></br>
        <Link to="/AdminHome/NoticeTable/NoticeForm">
            <button className="btn btn-primary" variant="contained">notice form</button>
        </Link>

    </div>
  )
}

export default AdminHome