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
    
      <div className="card border text-bg-white shadow-lg mb-5 mt-2 text-center"
       style={{maxWidth:1350, marginLeft:50,borderRadius: 30}}>
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
        
        <div className='row'>
        <div className='col-sm-2 border'><h2>date</h2></div>
          <div className='col-sm-10 border'>
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is a wider ca This content is a little bit longer.</p>
          </div>
          
      </div>
      
    </div>
  </div>

</div>
      </div> 
    </div>
   
  )
}

export default ViewNotice