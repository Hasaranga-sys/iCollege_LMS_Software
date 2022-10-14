import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "../Lecture/grid.css";
import { Button, Card } from "react-bootstrap";

function StudentViewLibraryItem() {
  const [items, setItems] = useState();

  useEffect(() => {
    const fetchFilers = async () => {
      const res = await fetch(`http://localhost:5000/pdf`);
      const data = await res.json();
      setItems(data);
    };
    fetchFilers();
  }, []);

  console.log(items);

  return (
    <div>
      <center>
        <h1>Library Resources</h1>
      </center>
      <div className="container grid offset-md-1 offset-md-1">
        {items?.map((row) => (
          <Card
            className="m-3 box shadow box-shadow"
            style={{ width: "18rem" }}
          >
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
                  {row.year}
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
                      faculty:
                    </strong>
                    {row.faculty} <br></br>
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
                        // onClick={() => getLecturesByid(row._id)}
                      >
                        More
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
  );
}

export default StudentViewLibraryItem;
