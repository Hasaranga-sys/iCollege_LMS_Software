import React from 'react'
import "../Components/Nav.css"
import $ from "jquery"
import jQuery from 'jquery'

const NavBar = () => {


  





  

  return (
   <div>
  <section class="navigation">
  <div class="nav-container">
    <div class="brand">
      <a href="#!">LOGO</a>
    </div>
    <nav>
      <div class="nav-mobile">
        <a id="nav-toggle" href="#!"><span></span></a>
      </div>
      <ul class="nav-list">
        {/* <!-- Setting the links to #! will ensure that no action takes place on click. --> */}
        <li><a href="#!">Home</a></li>
        <li><a href="#!">About</a></li>
        {/* <li><a href="#!">Services</a>
          <ul class="nav-dropdown">
            <li><a href="#!">Web Design</a></li>
            <li><a href="#!">Web Development</a></li>
            <li><a href="#!">Graphic Design</a></li>
          </ul>
        </li> */}
        <li><a href="#!">Pricing</a></li>
        <li><a href="#!">Contact</a></li>
      </ul>
    </nav>
    
  </div>
 
</section>



   </div>
  )
}

export default NavBar


{/* <nav class="navbar navbar-expand-lg bg-primary">
<div class="container-fluid">
  <a class="navbar-brand text-white" href="#">iCollege</a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
        <a class="nav-link active text-white" aria-current="page" href="/">Home</a>
      </li>
     
    </ul>
   
  </div>
</div>
</nav> */}