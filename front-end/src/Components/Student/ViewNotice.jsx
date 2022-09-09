import React, { useState } from "react";
import { useEffect } from "react";
import NoticeService from "../Service/NoticeService";
import Moment from "react-moment";
import { Link } from "react-router-dom";

const ViewNotice = () => {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    getAllNotices();
  }, []);

  const getAllNotices = () => {
    NoticeService.getAllNotices().then((data) => {
      setNotices(data.notices);
    });
  };
  return (
    <div>
    
      <div className="card text-bg-white w-75 shadow-lg mb-5 mt-5"
       style={{marginLeft:50,borderRadius: 30}}>
       <h2 class="card-title mx-auto mt-3">Notice</h2>
      
       <div className="mt-2 mb-5">
        {
          notices?.map((note)=><div className="card w-85 mx-5 mt-2 mb-2 shadow-lg" key={note.id}>
            
          <div className="card-body">        
           <div className='row'>
           <div className='col-sm-2'>
            <h4>
              <Moment format='YYYY MMM DD'>
               {note.date}
              </Moment>              
              </h4>
              </div>
             <div className='col-sm-10 '>
               <h5 className="card-title bg-#0d6efd">{note.topic}</h5>  
               <div className='col-sm-10 '>
                <p className="card-text">{note.notice}</p>
             </div>        
             </div>
         </div>      
       </div>
       
     </div>     
     
     )
        }
       
</div>
      </div> 
    </div>
  );
};

export default ViewNotice;
