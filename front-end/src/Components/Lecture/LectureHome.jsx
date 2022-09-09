import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import LectureService from "../Service/LectureService";

import Modal from "react-bootstrap/Modal";
import "./grid.css";
import { useNavigate, useParams } from "react-router-dom";

export default function LectureHome() {
  const [lectureList, setLectureList] = useState([]);
  const [getLectureByid, setGetLectureByid] = useState([]);
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getLecturesByid = (id) => {
    LectureService.getLectureById(id).then((res) => {
      setGetLectureByid([res.data]);
      console.log([res.date]);
      setShow(true);
    });
  };

  const deleteLecture = (id) => {
    LectureService.deleteLecture(id).then((res) => {
      console.log(`product ${id} deleted`);
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
    <div className="p-3">
      <Button variant="info">
        <a
          style={{ textDecoration: "none", color: "black" }}
          href="/Lecture/AddLecture"
        >
          Add Lecture
        </a>
      </Button>
      <div>
        <Modal size="lg" show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Lecture Info</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {getLectureByid?.map((row) => (
              <div>
                <div className="row">
                  <div className="col-10">
                    <strong style={{ display: "inline-block", width: "200px" }}>
                      Subject:
                    </strong>
                    {row.topic} <br></br>
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
                    {row.discription} <br></br>
                    <strong style={{ display: "inline-block", width: "200px" }}>
                      Meeting Link:
                    </strong>
                    <a href={row.meeting_link}>{row.meeting_link}</a> <br></br>
                  </div>
                </div>
              </div>
            ))}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Edit
            </Button>
            <Button variant="danger" onClick={deleteLecture()}>
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
      </div>

      <div className="container grid">
        {lectureList?.map((row) => (
          <Card className="m-3 box" style={{ width: "18rem" }}>
            <Card.Header>
              <div className="row">
                <div style={{ display: "inline-block", width: "250px" }}>
                  Subject:&emsp;{row.subject}
                </div>
                {row.year} {row.semester}
              </div>
            </Card.Header>
            <Card.Body style={{ backgroundColor: "#E1F5FE" }}>
              <Card.Text>
                <div className="row">
                  <div className="col-10">
                    <strong style={{ display: "inline-block", width: "100px" }}>
                      Topic:
                    </strong>
                    {row.topic} <br></br>
                    <strong style={{ display: "inline-block", width: "100px" }}>
                      Date:
                    </strong>
                    {row.date} <br></br>
                    <strong style={{ display: "inline-block", width: "100px" }}>
                      Time:
                    </strong>
                    {row.time} <br></br>
                  </div>

                  <div className="col align-self-end">
                    <button onClick={() => getLecturesByid(row._id)}>
                      More
                    </button>
                  </div>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}
