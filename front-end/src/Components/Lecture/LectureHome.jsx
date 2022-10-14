import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import LectureService from "../Service/LectureService";
import swal from "sweetalert2";
import Modal from "react-bootstrap/Modal";
import "./grid.css";
import { useNavigate, useParams,Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../UserManagement/AuthContext";
import UserServices from "../Service/UserServices";

export default function LectureHome() {
  const [lectureList, setLectureList] = useState([]);
  const [getLectureByid, setGetLectureByid] = useState([]);
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [search, setSearch] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [lastName, setlastName] = useState("");
  const [initials, setinitials] = useState("");
  const { userDetails, setUserDetails, isAuthenticated, setIsAuthenticated } =
    useContext(AuthContext);

  const getLecturesByid = (id) => {
    LectureService.getLectureById(id).then((res) => {
      setGetLectureByid([res.data]);
      console.log(res.data);
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
      console.log(userDetails);
      console.log(isAuthenticated);
    };
    UserServices.getUser(userDetails.userID).then((Response) => {
      setlastName(Response.data.lastName);
      setinitials(Response.data.initials);
    });
    getLectures();
  }, []);

  const viewlecture = (postId) => {
    navigate(`/Lecture/${postId}`);
  };

  return (
    <div>
      <div className="lecture-hero-image" style={{ height: 350 }}></div>
      <div className="container">
        
        <h3 className="p-4">Lecture Schedule</h3>
        <div className="d-flex justify-content-end">
          <Button variant="info">
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to={"/LectureHome/AddLecture"}
              
            >
              Add Lecture
            </Link>
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
                      <strong
                        style={{ display: "inline-block", width: "200px" }}
                      >
                        Subject:
                      </strong>
                      {row.subject} <br></br>
                      <strong
                        style={{ display: "inline-block", width: "200px" }}
                      >
                        Topic:
                      </strong>
                      {row.topic} <br></br>
                      <strong
                        style={{ display: "inline-block", width: "200px" }}
                      >
                        Date:
                      </strong>
                      {row.date} <br></br>
                      <strong
                        style={{ display: "inline-block", width: "200px" }}
                      >
                        Time:
                      </strong>
                      {row.time} <br></br>
                      <strong
                        style={{ display: "inline-block", width: "200px" }}
                      >
                        Discription:
                      </strong>
                      <div style={{ display: "inline-block", width: "400px" }}>
                        {row.discription}
                      </div>
                      <br></br>
                      <strong
                        style={{ display: "inline-block", width: "200px" }}
                      >
                        Lecture slide:
                      </strong>
                      {
                        <a href={row.pdf} download>
                          {row.Subject}
                          {row.topic}
                        </a>
                      }{" "}
                      <br></br>
                      <strong
                        style={{ display: "inline-block", width: "200px" }}
                      >
                        Meeting Link:
                      </strong>
                      <div style={{ display: "inline-block", width: "400px" }}>
                        <a href={row.meeting_link}>{row.meeting_link}</a>
                      </div>
                      <br></br>
                    </div>
                  </div>
                  <Modal.Footer>
                    <Button
                      variant="success"
                      size="sm"
                      onClick={() => navigate(`/UpdateLecture/${row._id}`)}
                    >
                      Update
                    </Button>
                  </Modal.Footer>
                </div>
              ))}
            </Modal.Body>
          </Modal>
        </div>
        <div className="container grid">
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
              <Card className="shadow m-3 box" style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Text>
                    <div
                      className="row"
                      style={{
                        borderBottom: "1px solid #B0BEC5",
                        color: "#a0a0a0",
                      }}
                    >
                      <div
                        style={{
                          display: "inline-block",
                          width: "250px",
                          fontSize: "23px",

                          fontWeight: "500",
                        }}
                      >
                        Subject:&emsp;{row.subject}
                      </div>

                      <div
                        style={{
                          display: "inline-block",
                          width: "250px",
                        }}
                      >
                        {row.year} {row.semester}
                      </div>
                    </div>
                    <div
                      className="row"
                      style={{ marginLeft: "10px", marginTop: "10px" }}
                    >
                      <div className="col-10">
                        <div
                          style={{
                            display: "inline-block",
                            width: "70px",
                          }}
                        >
                          Topic:
                        </div>
                        {row.topic} <br></br>
                        <div style={{ display: "inline-block", width: "70px" }}>
                          Date:
                        </div>
                        {row.date} <br></br>
                        <div style={{ display: "inline-block", width: "70px" }}>
                          Time:
                        </div>
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
                            block
                            onClick={() => getLecturesByid(row._id)}
                          >
                            More
                          </Button>
                          <Button
                            className="mx-1"
                            variant="danger"
                            size="sm"
                            block
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
      </div>
    </div>
  );
}
