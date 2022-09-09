import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import UserServices from "../Service/UserServices";

const UserList = () => {
  const [user, setUser] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    UserServices.getAllUsers().then((res) => {
      setUser(res.data);
    });
  });

  const AddStudent = (e) => {
    e.preventDefault();
    navigate("/user/-1");
  };
  const updteClicked = (id) => {
    // navigate(`/list/${id}`)
    navigate(`/user/${id}`);
  };
  const dleteClicked = (id) => {
    UserServices.deleteUser(id);
    console.log(id);
  };
  return (
    <div className="container">
      <br />
      <br />
      <div className="card-body">
        {/* <button onClick={AddStudent}>Add student</button> */}
        <h1>User list</h1>
        <br />
        <br />
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col"> Reg Number</th>
              <th scope="col">Last Name</th>
              <th scope="col">Initials</th>
              <th scope="col">Mobile Number</th>
              <th scope="col">Email</th>
              <th scope="col">Department</th>
              <th scope="col"> Role</th>
              <th scope="col">Update</th>
              <th scope="col">Remove</th>
            </tr>
          </thead>
          <tbody>
            {user.map((user) => (
              <tr key={user._id}>
                <td>{user.regNumber}</td>
                <td>{user.lastName}</td>
                <td>{user.initials}</td>
                <td>{user.mobileNumber}</td>
                <td>{user.email}</td>
                <td>{user.faculty}</td>
                <td>{user.role}</td>

                <td>
                  <button
                    className="btn btn-warning"
                    onClick={() => updteClicked(user._id)}
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-success"
                    onClick={() => dleteClicked(user._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div id="myDIV">
          <button className="btn btn-primary" onClick={AddStudent}>
            Add User
          </button>
        </div>
      </div>
    </div>
  );
};
export default UserList;
