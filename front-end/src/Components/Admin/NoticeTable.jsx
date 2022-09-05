import React from 'react'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import NoticeService from '../Service/NoticeService'

const NoticeTable = () => {

  const [notices, setNotices]= useState([])
  const navigate = useNavigate();

  useEffect(() => {
  getAllNotices()
  },[])


  const getAllNotices = ()=>{
    NoticeService.getAllNotices().then((data)=>{
      setNotices(data.notices)
      console.log(data.notices);
    })
  }

  const deleteNotice = (noticeId)=>{
    NoticeService.deleteNotice(noticeId).then((res)=>{
      getAllNotices();
    }).catch(error =>{
      console.log(error);
    })
  }

  return (
    <div>
      <div className='shadow mx-auto card w-75 text-center p-3 mt-5 mb-5'>
    <h1> </h1>

    <div>
     
      <div className='container p-2 mt-4 mb-4'>
        <div className='row'>
        <div className='shadow card mx-auto w-75'>

              <table class="table table-striped">
                  <thead className='table-primary'>
                    <tr>
                      <th scope="col">Faculty</th>
                      <th scope="col">Module</th>
                      <th scope="col">Topic</th>
                      <th scope="col">Notice</th>
                      <th scope="col">Action</th>
                                           
                    </tr>
                    </thead>
                    <tbody>
                      {notices?.map((note)=>
                      <tr key={note.id}>
                        <td>{note.faculty}</td>
                        <td>{note.module}</td>
                        <td>{note.topic}</td>
                        <td>{note.notice}</td>
                        <td><button type="button" onClick={()=>deleteNotice(note._id)} class="btn btn-danger">Delete</button></td>                                     

                        
                      </tr>

                      )
                        
                      }
                    </tbody>           
              </table>
              <br></br>
           

        </div>

        </div>

    </div>
  </div>



</div>
    </div>
  )
}

export default NoticeTable