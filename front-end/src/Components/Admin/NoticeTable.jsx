import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import NoticeService from "../Service/NoticeService";
import Swal from "sweetalert2";
import print from 'print-js'
import "../Admin/Admin.css"

const NoticeTable = () => {
  const [notices, setNotices] = useState([]);
  const [search, setSearch] = useState("")
  const navigate = useNavigate();

  useEffect(() => {
    getAllNotices();
  }, []);

  const getAllNotices = () => {
    NoticeService.getAllNotices().then((data) => {
      setNotices(data.notices);
      console.log(data.notices);
    });
  };

  const deleteNotice = (noticeId) => {
    NoticeService.deleteNotice(noticeId)
      .then((res) => {
        Swal.fire(
          "Deleted",
          "Notice Deleted Successfully",
          "success"
          );
        getAllNotices();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const addNotice = ()=>{
    navigate("/AdminHome/NoticeTable/NoticeForm")
  }

  return (
    <div className="p-3">
      <div
        className="admin-wcad card w-100 text-center p-3 mt-5 mb-5"
       
      >
        <h1>Announcements</h1>

        <div>
          <div className="container p-1 mt-4 mb-4">
            <div className="row ">
              <div className="shadow card mx-auto w-100">
              <div className=" container  d-flex flex-row">

                <Link className="btn btn-primary mt-3 p-2"
                 style={{width:190}}
               to={"/AdminHome/NoticeTable/NoticeForm"}>Add Announcement &nbsp;
               <i class="fa fa-plus-circle" aria-hidden="true"></i></Link>
                 
                    
           <input type="text" placeholder="Search By Notice" className="form-control
            mt-3 admin-srchbr1"onChange={(e) => {setSearch(e.target.value); }} />

            <input type="date" placeholder="Search By Notice" className="form-control mt-3 admin-srchbr-date "
          
              onChange={(e) => {setSearch(e.target.value); }} />
             
             <button type="button" className="btn btn-success mt-3 admin-cad" onClick={() =>print({
                            printable: notices, header: 'Announcement Details',
                            properties:
                            [
                            {field: 'faculty', displayName:'Employee ID'},
                            {field: 'date', displayName:'Email'},
                            {field: 'topic', displayName:'Name'},
                            {field: 'notice', displayName:'NIC'},
                           
                        ],
                            type:'json'
                            })}> 
                            print Details
                            &nbsp;
                            <i class="fa fa-print" aria-hidden="true"></i> </button>
                        
                    
                    
    </div>
                <table class="table table-striped mt-3">
                  <thead className="table-primary">
                    <tr>
                      <th scope="col">Faculty</th>
                      <th scope="col">Date</th>
                      <th scope="col">Topic</th>
                      <th scope="col">Notice</th>
                      <th scope="col">Action</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {notices?.filter((value) => {
            if (search === "") {
              return value;
            } else if (
              //value.id.toString(includes(search))
              value.date.toLowerCase().includes(search.toLowerCase()) || value.topic.toLowerCase().includes(search.toLowerCase())
            ) {
              return value;
            }
            return 0;
}).map((note) => (
                      <tr key={note.id}>
                        <td>{note.faculty}</td>
                        <td>{note.date}</td>
                        <td>{note.topic}</td>
                        <td>{note.notice}</td>
                        <td>
                          <Link
                            className="btn btn-warning"
                            to={`/AdminHome/NoticeTable/NoticeForm/${note._id}`}
                          >
                            Update &nbsp;
                            <i class="fa fa-print" aria-hidden="true"></i>
                          </Link>
                        </td>
                        
                        <td>
                          <button
                            type="button"
                            onClick={() => deleteNotice(note._id)}
                            class="btn btn-danger"
                          > Delete &nbsp;
                            <i class="fa fa-trash" aria-hidden="true"></i> 
                            
                          </button>
                        </td> 
                      </tr>
                    ))}
                  </tbody>
                </table>
                <br></br>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticeTable;
