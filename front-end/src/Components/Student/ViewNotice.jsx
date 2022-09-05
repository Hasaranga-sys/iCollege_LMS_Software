import React, { useState } from 'react'
import { useEffect } from 'react'
import NoticeService from '../Service/NoticeService'

const ViewNotice = () => {
  
  const [notices, setNotices] = useState([])

  useEffect(()=>{
    getAllNotices();
  },[])

  const getAllNotices = ()=>{
    NoticeService.getAllNotices().then((data)=>{
      setNotices(data.notices)
    })
  }
  return (
    <div>
    
      <div className="card border text-bg-white shadow-lg mb-3 mt-5 text-center" style={{maxWidth:1350, marginLeft:50, maxHeight:800}}>
        fdsf
       <div className="card mt-5 mb-5">
        {
          notices?.map((note)=>
          <div className="card w-50 mx-auto mt-2 mb-2" key={note.id}>    
          <div className="card-body">
         <h5 className="card-title">{note.faculty}</h5>
         <h5 className="card-title">{note.faculty}</h5>
         <p className="card-text">{note.module}</p>
         <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
       </div>
     </div>)
        }
       <div className="card w-50 mx-auto mt-2 mb-2">    
       <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>

</div>
      </div> 
    </div>
   
  )
}

export default ViewNotice