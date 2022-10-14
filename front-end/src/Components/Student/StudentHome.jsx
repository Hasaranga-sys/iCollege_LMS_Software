import React from 'react'
import { Link } from 'react-router-dom'
import hero from '../images/HERObLOB.svg'
import ViewNotice from './ViewNotice'
import "../Student/Student.css"
import Foot from '../Foot'


const StudentHome = () => {
  return (
    <div>




      <div className='hero-image' style={{height:750}}>
        
        <div className='hero-text'>
          {/* <h1>iCollege</h1> */}
          
        </div>
        
      </div>

      

<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet"/>
<div class="container">
    <div class="row">
        <div class="col-lg-3 col-sm-6">
            <div class="card-box bg-blue">
                <div class="inner">
                    <h3> Lectures </h3>
                    <p> Student Strength </p>
                </div>
                <div class="icon">
                    <i class="fa fa-graduation-cap" aria-hidden="true"></i>
                </div>
                <a href="#" class="card-box-footer">View More <i class="fa fa-arrow-circle-right"></i></a>
            </div>
        </div>

        <div class="col-lg-3 col-sm-6">
            <div class="card-box bg-green">
                <div class="inner">
                    <h3> E-Library </h3>
                    <p> Today’s Collection </p>
                </div>
                <div class="icon">
                    <i class="fa fa-money" aria-hidden="true"></i>
                </div>
                <a href="#" class="card-box-footer">View More <i class="fa fa-arrow-circle-right"></i></a>
            </div>
        </div>
        <div class="col-lg-3 col-sm-6">
            <div class="card-box bg-orange">
                <div class="inner">
                    <h3> 5464 </h3>
                    <p> New Admissions </p>
                </div>
                <div class="icon">
                    <i class="fa fa-user-plus" aria-hidden="true"></i>
                </div>
                <a href="#" class="card-box-footer">View More <i class="fa fa-arrow-circle-right"></i></a>
            </div>
        </div>
        <div class="col-lg-3 col-sm-6">
            <div class="card-box bg-red">
                <div class="inner">
                    <h3> 723 </h3>
                    <p> Faculty Strength </p>
                </div>
                <div class="icon">
                    <i class="fa fa-users"></i>
                </div>
                <a href="#" class="card-box-footer">View More <i class="fa fa-arrow-circle-right"></i></a>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-lg-3 col-sm-6">
            
        </div>
    </div>
</div>


      
      <div className='row'>
      <ViewNotice/>
{/* 
        <div class="card  text-bg-white shadow-lg mb-3 mt-5 text-center p-4" style={{maxWidth:350, marginLeft:50}}>
                </div>  */}
      
      </div>
      {/* <Link to="/StudenHome/noticeView">
            <button className="btn btn-primary" variant="contained">notice view</button>
      </Link> */}

  
    </div>
    
  )
}

export default StudentHome