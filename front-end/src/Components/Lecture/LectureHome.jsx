import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import LectureService from "../Service/LectureService";
import swal from "sweetalert2";

import Modal from "react-bootstrap/Modal";
import "./grid.css";
import { useNavigate, useParams } from "react-router-dom";

export default function LectureHome() {
  const [lectureList, setLectureList] = useState([]);
  const [getLectureByid, setGetLectureByid] = useState([]);
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [search, setSearch] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getLecturesByid = (id) => {
    LectureService.getLectureById(id).then((res) => {
      setGetLectureByid([res.data]);
      console.log([res.date]);
      setShow(true);
    });
  };
  //moda hasa
  const deleteLecture = async (id) => {
    await LectureService.deleteLecture(id)
      .then((res) => {
        console.log(`product ${id} deleted`);
        swal.fire(` succesfully deleted`);
      })
      .then((res) => {
        setLectureList(lectureList.filter((list) => list._id !== id));
      });
  };

  useEffect(() => {
    const getLectures = () => {
      LectureService.getAllLecturers().then((res) => {
        setLectureList(res.data);
        console.log(res.data);
      });
    };

    getLectures();
  }, []);

  const viewlecture = (postId) => {
    navigate(`/Lecture/${postId}`);
  };

  return (
    <div>
      <div className="container">
        <h3 className="p-4">Lecture Schedule</h3>
        <div className="d-flex justify-content-end">
          <Button variant="info">
            <a
              style={{ textDecoration: "none", color: "black" }}
              href="/LectureHome/AddLecture"
            >
              Add Lecture
            </a>
          </Button>
        </div>

        <div className="row  col-lg-3 col-md-2">
          <div className="col-lg-6">
            <select
              type="search"
              className="form-control"
              required
              onChange={(e) => setSearch(e.target.value)}
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
              type="search"
              name="semester"
              className="form-control"
              onChange={(e) => setSearch(e.target.value)}
            >
              <option selected>Select Semester</option>
              <option value="1st Semester">1st Semester</option>
              <option value="2nd Semester">2nd Semester</option>
            </select>
          </div>
        </div>
      </div>

      <div>
        <Modal size="lg" show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Lecture Info</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {getLectureByid.map((row) => (
              <div>
                <div className="row">
                  <div className="col-10">
                    <strong style={{ display: "inline-block", width: "200px" }}>
                      Subject:
                    </strong>
                    {row.subject} <br></br>
                    <strong style={{ display: "inline-block", width: "200px" }}>
                      Topic:
                    </strong>
                    {row.topic} <br></br>
                    <strong style={{ display: "inline-block", width: "200px" }}>
                      Date:
                    </strong>
                    {row.date} <br></br>
                    <strong style={{ display: "inline-block", width: "200px" }}>
                      Time:
                    </strong>
                    {row.time} <br></br>
                    <strong style={{ display: "inline-block", width: "200px" }}>
                      Discription:
                    </strong>
                    <div style={{ display: "inline-block", width: "400px" }}>
                      {row.discription}
                    </div>
                    <br></br>
                    <strong style={{ display: "inline-block", width: "200px" }}>
                      Lecture slide:
                    </strong>
                    {
                      <a href={row.pdf} download>
                        {row.Subject}
                        {row.topic}
                      </a>
                    }{" "}
                    <br></br>
                    <strong style={{ display: "inline-block", width: "200px" }}>
                      Meeting Link:
                    </strong>
                    <div style={{ display: "inline-block", width: "400px" }}>
                      <a href={row.meeting_link}>{row.meeting_link}</a>
                    </div>
                    <br></br>
                  </div>
                </div>
              </div>
            ))}
          </Modal.Body>
          <Modal.Footer></Modal.Footer>
        </Modal>
      </div>
      <div className="container grid offset-md-1 offset-md-1">
        {lectureList
          ?.filter((row) => {
            if (search == "") {
              return row;
            } else if (
              row.year
                .toString()
                .toLowerCase()
                .includes(search.toString().toLowerCase()) ||
              row.semester
                .toString()
                .toLowerCase()
                .includes(search.toString().toLowerCase())
            ) {
              return row;
            }
            return 0;
          })
          .map((row) => (
            <Card className="m-3 box box-shadow" style={{ width: "18rem" }}>
              <Card.Header>
                <div className="row">
                  <div
                    style={{
                      display: "inline-block",
                      width: "250px",
                      fontSize: "20px",
                    }}
                  >
                    Subject:&emsp;{row.subject}
                  </div>
                  <div style={{ display: "inline-block", width: "250px" }}>
                    {row.year} {row.semester}
                  </div>
                </div>
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  <div className="row">
                    <div className="col-10">
                      <strong
                        style={{
                          display: "inline-block",
                          width: "100px",
                        }}
                      >
                        Topic:
                      </strong>
                      {row.topic} <br></br>
                      <strong
                        style={{ display: "inline-block", width: "100px" }}
                      >
                        Date:
                      </strong>
                      {row.date} <br></br>
                      <strong
                        style={{ display: "inline-block", width: "100px" }}
                      >
                        Time:
                      </strong>
                      {row.time} <br></br>
                    </div>

                    <div
                      className="row "
                      style={{ display: "flex", justifyContent: "right" }}
                    >
                      <div className="col-auto">
                        <Button
                          className="mx-1"
                          variant="info"
                          size="sm"
                          onClick={() => getLecturesByid(row._id)}
                        >
                          More
                        </Button>
                        <Button
                          className="mx-1"
                          variant="danger"
                          size="sm"
                          onClick={() => deleteLecture(row._id)}
                        >
                          Delete
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
      </div>
      {/* <div className="shadow card w-75 mx-auto text-center p-3 mt-5 bg-light">
      <h1>Lecture Info</h1>

      <div>
        <div className="container"></div>
        <div className="container p-2 mt-4 mb-4">
          <div className="row">
            <div className="shadow card mx-auto w-75">
              <table class="table table-striped">
                <thead className="table-primary">
                  <tr>
                    <th scope="col">Year</th>
                    <th scope="col">Semester</th>
                    <th scope="col">Date</th>
                    <th scope="col">Time</th>
                    <th scope="col">Meeting Link</th>
                    <th scope="col">Description</th>
                    <th scope="col">Lecture</th>
                    <th scope="col">Topic</th>
                    <th scope="col">Subject</th>
                    <th scope="col">Document</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {lectureList?.map((row) => (
                    <tr>
                      <td>{row.year}</td>
                      <td>{row.semester}</td>
                      <td>{row.date}</td>
                      <td>{row.time}</td>
                      <td>{row.meeting_link}</td>
                      <td>{row.discription}</td>
                      <td>{row.lecture}</td>
                      <td>{row.topic}</td>
                      <td>{row.subject}</td>
                      <td>
                        {
                          <a href={row.pdf} download>
                            {row.topic}
                          </a>
                        }
                      </td>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => {
                            deleteClicked(row._id);
                          }}
                        >
                          delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div> */}
    </div>
  );
}
