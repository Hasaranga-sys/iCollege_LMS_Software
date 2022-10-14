import React, { useEffect, useState } from "react";
import LectureService from "../Service/LectureService";

export default function LectureAdminHome() {
  const [lectureList, setLectureList] = useState([]);
  //   const navigate = useNavigate();
  useEffect(() => {
    const getLectures = () => {
      LectureService.getAllLecturers().then((res) => {
        setLectureList(res.data);
        console.log(res.data);
      });
    };

    getLectures();
  }, []);

  return (
    <div className="container">
      <div className="card-body">
        {/* <button onClick={AddStudent}>Add student</button> */}
        <h1>User list</h1>
        <table class="table table-hover">
          <thead>
            <tr className="table-active">
              <th scope="col">
                <em> Lectures Info</em>
              </th>
              <th scope="col">
                <em>Date & Time</em>
              </th>
              <th scope="col">
                <em>Discription</em>
              </th>
              <th scope="col">
                <em>Grade</em>
              </th>
              <th scope="col">
                <em>Lecture Slide</em>
              </th>
              <th scope="col">
                <em>Meeting Link</em>
              </th>

              <th scope="col"> </th>
            </tr>
          </thead>
          <tbody>
            {lectureList.map((lecture) => (
              <tr key={lecture._id}>
                <td>
                  <div>
                    <strong>Subject:</strong> {lecture.subject}
                    <br></br>
                    <strong>Topic: </strong>
                    {lecture.topic}
                  </div>
                </td>
                <td style={{ width: "15%" }}>
                  <div>
                    <strong>Time:</strong> {lecture.time}
                    <br></br>
                    <strong>Date: </strong>
                    {lecture.date}
                  </div>
                </td>

                <td style={{ width: "20%" }}>{lecture.discription}</td>
                <td>
                  {lecture.year}
                  <br></br> {lecture.semester}
                </td>
                <td style={{ width: "15%" }}>
                  <a href={lecture.pdf} download>
                    {lecture.subject}_{lecture.topic}
                  </a>
                </td>
                <td style={{ width: "15%" }}>
                  <a href={lecture.meeting_link}>
                    {lecture.topic}_{lecture.date}_{lecture.time}
                  </a>
                </td>

                {/* <td>
                  <button
                    className="btn btn-warning"
                    // onClick={() => updteClicked(user._id)}
                  >
                    ✏️
                  </button>
                </td> */}
                <td>
                  <button
                    className="btn btn-success"
                    // onClick={() => dleteClicked(user._id)}
                  >
                    ❌
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
