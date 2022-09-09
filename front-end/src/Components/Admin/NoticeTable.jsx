import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import NoticeService from "../Service/NoticeService";

const NoticeTable = () => {
  const [notices, setNotices] = useState([]);
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
    <div>
      <div
        className="shadow card w-75 text-center p-3 mt-5 mb-5"
        style={{ marginLeft: 80, borderRadius: 30 }}
      >
        <h1>Announcements</h1>

        <div>
          <div className="container p-1 mt-4 mb-4">
            <div className="row">
              <div className="shadow card mx-auto w-75">
                <button>ds</button>

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
                    {notices?.map((note) => (
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
