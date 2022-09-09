import React from 'react'
import { Link } from 'react-router-dom'
import hero from '../images/HERObLOB.svg'
import ViewNotice from './ViewNotice'


const StudentHome = () => {
  return (
    <div>
      <div>
        <img className='card-img-top' src="https://www.chegg.com/study-101/wp-content/uploads/sites/7/2017/09/hero_study101.jpg"
         
        />
      </div>
      <ViewNotice/>
      <Link to="/StudenHome/noticeView">
            <button className="btn btn-primary" variant="contained">notice view</button>
      </Link>
    </div>
  )
}

export default StudentHome