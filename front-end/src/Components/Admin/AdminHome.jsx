import React from "react";
import { Link } from "react-router-dom";

const AdminHome = () => {
  return (
    <div
      className="card w-75 mx-auto mt-5 bg-light p-5"
      style={{ borderRadius: 30 }}
    >
      <div className=" card border ">
        <h2 style={{ borderRadius: 30, textAlign: "center" }}>
          Lecture Home Page
        </h2>

        <div class="py-5 ">
          <div class="container">
            <div class="row mx-auto ">
              <div class="col-md-3 mx-auto">
                <div style={{ height: 190 }} class="card text-center shadow-lg">
                  <div class="card-block">
                    <img
                      style={{ height: 130, width: 130 }}
                      class="card-img-top"
                      src="https://cdn-icons-png.flaticon.com/512/2641/2641310.png"
                      alt="Card image cap"
                    />
                    <h4 class="card-title"></h4>
                    <Link
                      className="btn btn-primary"
                      to={"/Lecture/AddLecture"}
                    >
                      Add Lectures
                    </Link>
                  </div>
                </div>
              </div>

              <div class="col-md-3 mx-auto">
                <div style={{ height: 190 }} class="card text-center shadow-lg">
                  <div class="card-block">
                    <img
                      style={{ height: 130, width: 130 }}
                      class="card-img-top"
                      src="https://cdn-icons-png.flaticon.com/512/2641/2641310.png"
                      alt="Card image cap"
                    />
                    <h4 class="card-title"></h4>
                    <Link className="btn btn-primary" to={"/Lecture"}>
                      Lecture schedule
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <br></br>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
