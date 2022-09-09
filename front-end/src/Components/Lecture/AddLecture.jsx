import React, { useState, useEffect } from "react";
import LectureService from "../Service/LectureService";
import { useNavigate, useParams } from "react-router-dom";


export default function AddLecture() {
  const mystyle = { backgroundColor: "#FAFAFA" };
  const history = useNavigate();
  
  const [semester, setSemester] = useState("");
  const [topic, setTopic] = useState("");
  const [subject, setSubject] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [discription, setDiscription] = useState("");
  const [meeting_link, setMeeting_link] = useState("");
  const [year, setYear] = useState("");
  // const [lecture, setLecture] = useState("");
  const [pdf, setPdf] = useState("");

  const clickSubmit = async (e)=>{
    try {
      e.preventDefault();
      const data = new FormData();
      
      data.append("year", year);
      data.append("subject",subject);
      data.append("semester",semester);
      data.append("topic",topic);
      data.append("date",date);
      data.append("time",time);
      data.append("meeting_link",meeting_link);
      data.append("discription",discription);
      // data.append("lecture",lecture);
      
      for (var x = 0; x < pdf.length; x++) {
        data.append("uploaded_Image", pdf[x]);
      }

      const res = await fetch(`http://localhost:5000/lecture`, {
        method: "POST",
        body: data,
      });
      if (res.ok) {
       
        setYear("");
        setSubject("");
        setSemester("");
        setTopic("");
        setDate("");
        setTime("");
        setDiscription("");
        setMeeting_link("");
        // setLecture("")
        setPdf(null);

      
        history("/viewlectures");
      }


    } catch (error) {
      console.log(error);
    }
  }


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
                <form onSubmit={clickSubmit}>
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
                          value={year}
                          onChange={(e) => setYear(e.target.value)}
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
                          value={semester}
                          onChange={(e) => setSemester(e.target.value)}
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
                        value={subject}
                          onChange={(e) => setSubject(e.target.value)}
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
                        value={topic}
                          onChange={(e) => setTopic(e.target.value)}
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
                          value={date}
                          onChange={(e) => setDate(e.target.value)}
                        />
                      </div>
                      <div className=" col-lg-6">
                        <input
                          placeholder="Enter time"
                          type="time"
                          className="form-control"
                          title="Name should only contain lowercase or uppercase letters. e.g. john"
                          value={time}
                          onChange={(e) => setTime(e.target.value)}
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
                        value={discription}
                          onChange={(e) => setDiscription(e.target.value)}
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
                        value={meeting_link}
                        onChange={(e) => setMeeting_link(e.target.value)}
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
                  multiple
                  required
                  filename="uploaded_Image"
                  className="form-control"
                  
                  onChange={(e) =>{setPdf(e.target.files);}}
                />
                    </div>
                  </div>
                  {/* <div className="row form-group pb-4">
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
                        value={year}
                          onChange={(e) => setYear(e.target.value)}
                      />
                    </div>
                  </div> */}

                  <div>

                  <button type="submit" className="btn btn-primary">
                        Submit
                      </button>
                    

                    {/* <button className="btn btn-success" type="submit">
                      Save
                    </button>
                    <button
                      className="btn btn-danger"
                      style={{ marginLeft: "10px" }}
                      onClick={() => navigate("/LectureHome")}
                    >
                      Cancel
                    </button> */}
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
