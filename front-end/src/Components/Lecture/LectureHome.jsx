import React from "react";
import { Button } from "react-bootstrap";

export default function LectureHome() {
  return (
    <div>
      <Button variant="info">
        <a
          style={{ textDecoration: "none", color: "black" }}
          href="/LectureHome/AddLecture"
        >
          Add Lecture
        </a>
      </Button>
    </div>
  );
}
