import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import NoticeService from "../Service/NoticeService";
import Swal from "sweetalert2";

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
        className="shadow card w-100 text-center p-3 mt-5 mb-5"
        style={{borderRadius: 30 }}
      >
        <h1>Announcements</h1>

        <div>
          <div className="container p-1 mt-4 mb-4">
            <div className="row">
              <div className="shadow card mx-auto w-100">
              <div className=" container row  mx-1">

                <Link className="btn btn-primary w-25 mt-3"
               to={"/AdminHome/NoticeTable/NoticeForm"}>Add Announcement</Link>
                 
           <input type="text" placeholder="Search By Notice" className="form-control mt-3"
             style={{width: "17%",marginLeft:570}} onChange={(e) => {setSearch(e.target.value); }} />

            <input type="date" placeholder="Search By Notice" className="form-control mt-3 mx-2 "
             style={{width: "12%"}} onChange={(e) => {setSearch(e.target.value); }} />
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
                            className="btn btn-info"
                            to={`/AdminHome/NoticeTable/NoticeForm/${note._id}`}
                          >
                            Update
                          </Link>
                        </td>
                        <td>
                          <button
                            type="button"
                            onClick={() => deleteNotice(note._id)}
                            class="btn btn-danger"
                          >
                            Delete
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
