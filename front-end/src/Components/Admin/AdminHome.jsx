import React from 'react'
import { Link } from 'react-router-dom'

const AdminHome = () => {
  return (
    
    <div className="card w-100 bg-light" >AdminHome
        <Link to="/AdminHome/NoticeTable">
            <button className="btn btn-primary" variant="contained">notice table</button>
        </Link>
        <br></br>
        <Link to="/AdminHome/NoticeTable/NoticeForm">
            <button className="btn btn-primary" variant="contained">notice form</button>
        </Link>

        <br></br>
        <Link to="/AdminHome/addLibararyItemForm">
            <button className="btn btn-primary" variant="contained">library form</button>
        </Link>

        <br></br>
        <Link to="/AdminHome/ViewLibararyItems">
            <button className="btn btn-primary" variant="contained">library View</button>
        </Link>

        

    </div>
    
  )
}

export default AdminHome