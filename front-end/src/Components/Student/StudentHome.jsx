import React from 'react'
import { Link } from 'react-router-dom'
import hero from '../images/HERObLOB.svg'
import ViewNotice from './ViewNotice'
import "../Student/Student.css"


const StudentHome = () => {
  return (
    <div>
      <div className='hero-image' style={{height:250}}>
        
        <div className='hero-text'>
          <h1>iCollege</h1>
          
        </div>
        
      </div>

      <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card h-100">
      <img src="..." class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="..." class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a short card.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="..." class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="..." class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
</div>
      
      <div className='row'>
      <ViewNotice/>

        <div class="card  text-bg-white shadow-lg mb-3 mt-5 text-center p-4" style={{maxWidth:350, marginLeft:50}}>
                </div> 
      
      </div>
      {/* <Link to="/StudenHome/noticeView">
            <button className="btn btn-primary" variant="contained">notice view</button>
      </Link> */}
    </div>
  )
}

export default StudentHome