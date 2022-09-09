import React, { useState, useEffect } from "react";
import LectureService from "../Service/LectureService";
import { useNavigate, useParams } from "react-router-dom";

export default function AddLecture() {
  const mystyle = { backgroundColor: "#FAFAFA" };
  const navigate = useNavigate();
  const [lecture, setLecture] = useState({
    year: "",
    semester: "",
    topic: "",
    subject: "",
    date: "",
    time: "",
    discription: "",
    meeting_link: "",
  });

  const handleChangeText = (name, value) => {
    setLecture({ ...lecture, [name]: value.target.value });
    console.log(lecture);
  };

  const addLecture = (e) => {
    e.preventDefault();
    const lectures = {
      year: lecture.year,
      semester: lecture.semester,
      topic: lecture.topic,
      subject: lecture.subject,
      date: lecture.date,
      time: lecture.time,
      discription: lecture.discription,
      meeting_link: lecture.meeting_link,
    };

    LectureService.createLecture(lectures)
      .then(() => {
        navigate("/Lecture");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div>
        <div className="container pt-5">
          <div className="row">
            <div
              className="card col-md-6 offset-md-3 offset-md-3"
              style={mystyle}
            >
              <h3 style={{ paddingTop: 15, paddingLeft: 20 }}>ADD LECTURES</h3>
              <div className="card-body">
                <form onSubmit={addLecture}>
                  <div className="row form-group pb-4">
                    <div className="col-lg-3 col-md-6">
                      <label> Year and semester: </label>
                    </div>
                    <div className="row col-lg-9 col-md-7">
                      <div className="col-lg-6">
                        <select
                          name="year"
                          className="form-control"
                          required
                          onChange={(val) => handleChangeText("year", val)}
                        >
                          <option selected>Select year</option>
                          <option value="1st Year">1st Year</option>
                          <option value="2nd Year">2nd Year</option>
                          <option value="3rd Year">3rd Year</option>
                          <option value="4th Year">4th Year</option>
                        </select>
                      </div>
                      <div className=" col-lg-6">
                        <select
                          name="semester"
                          className="form-control"
                          onChange={(val) => handleChangeText("semester", val)}
                        >
                          <option selected>Select Semester</option>
                          <option value="1st Semester">1st Semester</option>
                          <option value="2nd Semester">2nd Semester</option>
                        </select>
                      </div>
                    </div>

                    {/* <input
                        placeholder="First Name"
                        name="firstName"
                        className="form-control"
                        title="Name should only contain lowercase or uppercase letters. e.g. john"
                        required
                        onChange={(val) =>
                          handleChangeText("staff_service_id", val)
                        }
                      /> */}
                  </div>
                  <div className="row form-group pb-4">
                    <div className="col-lg-3 col-md-5">
                      <label> Subject: </label>
                    </div>
                    <div className="col-lg-9 col-md-7">
                      <input
                        placeholder="Enter subject"
                        name="subject"
                        className="form-control"
                        title="Name should only contain lowercase or uppercase letters. e.g. john"
                        onChange={(val) => handleChangeText("subject", val)}
                      />
                    </div>
                  </div>
                  <div className="row form-group pb-4">
                    <div className="col-lg-3 col-md-5">
                      <label> Lecture topic: </label>
                    </div>
                    <div className="col-lg-9 col-md-7">
                      <input
                        placeholder="Enter Topic"
                        name="topic"
                        className="form-control"
                        title="Name should only contain lowercase or uppercase letters. e.g. john"
                        onChange={(val) => handleChangeText("topic", val)}
                      />
                    </div>
                  </div>
                  <div className="row form-group pb-4">
                    <div className="col-lg-3 col-md-5">
                      <label> Date and time: </label>
                    </div>
                    <div className="row col-lg-9 col-md-7">
                      <div className="col-lg-6">
                        <input
                          placeholder="Enter date"
                          type="date"
                          className="form-control"
                          title="Name should only contain lowercase or uppercase letters. e.g. john"
                          onChange={(val) => handleChangeText("date", val)}
                        />
                      </div>
                      <div className=" col-lg-6">
                        <input
                          placeholder="Enter time"
                          type="time"
                          className="form-control"
                          title="Name should only contain lowercase or uppercase letters. e.g. john"
                          onChange={(val) => handleChangeText("time", val)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row form-group pb-4">
                    <div className="col-lg-3 col-md-5">
                      <label> Discription: </label>
                    </div>
                    <div className="col-lg-9 col-md-7">
                      <input
                        placeholder="Enter Discription"
                        name="firstName"
                        className="form-control"
                        title="Name should only contain lowercase or uppercase letters. e.g. john"
                        onChange={(val) => handleChangeText("discription", val)}
                      />
                    </div>
                  </div>
                  <div className="row form-group pb-4">
                    <div className="col-lg-3 col-md-5">
                      <label> Meeting link: </label>
                    </div>
                    <div className="col-lg-9 col-md-7">
                      <input
                        placeholder="Meeting Link"
                        name="firstName"
                        className="form-control"
                        title="Name should only contain lowercase or uppercase letters. e.g. john"
                        onChange={(val) =>
                          handleChangeText("meeting_link", val)
                        }
                      />
                    </div>
                  </div>
                  <div className="row form-group pb-4">
                    <div className="col-lg-3 col-md-5">
                      <label> Lecture slide: </label>
                    </div>
                    <div className="col-lg-9 col-md-7">
                      <input
                        type="file"
                        placeholder="First Name"
                        name="firstName"
                        className="form-control"
                        title="Name should only contain lowercase or uppercase letters. e.g. john"
                      />
                    </div>
                  </div>
                  <div className="row form-group pb-4">
                    <div className="col-lg-3 col-md-5">
                      <label> Tutorial: </label>
                    </div>
                    <div className="col-lg-9 col-md-7">
                      <input
                        type="file"
                        placeholder="First Name"
                        name="firstName"
                        className="form-control"
                        title="Name should only contain lowercase or uppercase letters. e.g. john"
                      />
                    </div>
                  </div>

                  <div>
                    <button className="btn btn-success" type="submit">
                      Save
                    </button>
                    <button
                      className="btn btn-danger"
                      style={{ marginLeft: "10px" }}
                      onClick={() => navigate("/LectureHome")}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
