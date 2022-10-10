import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import UserServices from "../Service/UserServices";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const LoginForm = (params) => {
  const [regNumber, setregNumber] = useState("");
  const [password, setpassword] = useState("");
  const nav = useNavigate();

  useEffect(() => {}, []);

  const submitClicked = (e) => {
    e.preventDefault();
    const loginTemplate = {
      regNumber,
      password,
    };

    UserServices.login(loginTemplate)
      .then((res) => {
        // setstudent(res.data)
        console.log(res.data);
        if (res.data.role == "student") {
          console.log("true:student");
          nav("/StudentHome");
        } else if (res.data.role == "admin") {
          console.log("true:admin");
          // nav("/AdminHome")
          nav("/AdminHome");
        } else if (res.data.role == "lecture") {
          console.log("true:admin");
          // nav("/AdminHome")
          nav("/LectureHome");
        }
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: "User Name OR Password In correct!",
        });
        console.log("failed");
      });
    // nav("/students")

    console.log(loginTemplate);
  };
  return (
    <div className="container">
      <br />
      <br />
      <br />
      <br />
      <div className="shadow card col-md-6 offset-md-3 offset-md-3">
        <div className="card-body">
          <div>
            <center>
              <h1>Login</h1>
            </center>
          </div>

          <form onSubmit={submitClicked}>
            <div className="form-group row">
              <label className="col-sm-6 col-form-label">
                Registeration Number :{" "}
              </label>
              <div className="col-sm-12">
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => {
                    setregNumber(e.target.value);
                  }}
                  required
                ></input>
              </div>
            </div>
            <br></br>
            <div className="form-group row">
              <label className="col-sm-6 col-form-label">Password : </label>
              <div className="col-sm-12">
                <input
                  type="password"
                  className="form-control"
                  onChange={(e) => {
                    setpassword(e.target.value);
                  }}
                  required
                />
              </div>
            </div>
            <br />
            <div className="text-center">
              <input
                type="submit"
                value="Sign in"
                className="btn btn-primary "
              />
            </div>
            <br />
            <div className="text-center">
              Create An Account{" "}
              <Link to="/user/-1" className="text-center">
                Sign up{" "}
              </Link>
            </div>
            <br />
          </form>
        </div>
      </div>
    </div>
  );
};
export default LoginForm;
