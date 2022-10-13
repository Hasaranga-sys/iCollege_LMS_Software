import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import UserServices from "../Service/UserServices";
import Swal from "sweetalert2";
import print from "print-js";
import "../Admin/Admin.css";

const UserList = () => {
  const [user, setUser] = useState([]);
  const [search, setSearch] = useState("");
  const [checked, setChecked] = React.useState(false);
  const [adminFilter, setAdminFilter] = useState("");
  const [category, setCategory] = useState("");
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
    // <div className="container">
    //   <br />
    //   <br />
    //   <div className="card-body">
    //     {/* <button onClick={AddStudent}>Add student</button> */}
    //     <h1>User list</h1>
    //     <br />
    //     <br />
    //     <table class="table table-hover">
    //       <thead>
    //         <tr>
    //           <th scope="col"> Reg Number</th>
    //           <th scope="col">Last Name</th>
    //           <th scope="col">Initials</th>
    //           <th scope="col">Mobile Number</th>
    //           <th scope="col">Email</th>
    //           <th scope="col">Department</th>
    //           <th scope="col"> Role</th>
    //           <th scope="col">Update</th>
    //           <th scope="col">Remove</th>
    //         </tr>
    //       </thead>
    //       <tbody>
    //         {user.map((user) => (
    //           <tr key={user._id}>
    //             <td>{user.regNumber}</td>
    //             <td>{user.lastName}</td>
    //             <td>{user.initials}</td>
    //             <td>{user.mobileNumber}</td>
    //             <td>{user.email}</td>
    //             <td>{user.faculty}</td>
    //             <td>{user.role}</td>

    //             <td>
    //               <button
    //                 className="btn btn-warning"
    //                 onClick={() => updteClicked(user._id)}
    //               >
    //                 Update
    //               </button>
    //             </td>
    //             <td>
    //               <button
    //                 className="btn btn-success"
    //                 onClick={() => dleteClicked(user._id)}
    //               >
    //                 Delete
    //               </button>
    //             </td>
    //           </tr>
    //         ))}
    //       </tbody>
    //     </table>
    //     <div id="myDIV">
    //       <button className="btn btn-primary" onClick={AddStudent}>
    //         Add User
    //       </button>
    //     </div>
    //   </div>
    // </div>
    <div className="p-3">
      <div
        className="shadow card w-100 text-center p-3 mt-5 mb-5"
        style={{ borderRadius: 30 }}
      >
        <h1>User List</h1>

        <div>
          <div className="container p-1 mt-4 mb-4">
            <div className="row">
              <div className="shadow card mx-auto w-100">
                <br></br>
                <div className=" container  d-flex flex-row">
                  <button
                    className="btn btn-primary mt-3 p-2"
                    style={{ width: 190 }}
                    onClick={AddStudent}
                  >
                    Add User
                  </button>
                  <input
                    type="text"
                    placeholder="search"
                    className="form-control"
                    style={{
                      marginLeft: "1%",
                      marginTop: 20,
                      marginBottom: 20,
                      width: "40%",
                    }}
                    onChange={(e) => {
                      setSearch(e.target.value);
                    }}
                  />

                  <select
                    className="form-control
                  mt-3 admin-srchbr1"
                    onChange={(e) => setSearch(e.target.value)}
                    // value={category}
                    // name="User_Category"
                  >
                    <option value="">Select Category </option>
                    <option value="admin">Admin</option>
                    <option value="lecture">Lectures</option>
                    <option value="student">Students</option>
                  </select>
                  {/* <button type="button" className="btn btn-success mt-3 admin-cad" onClick={() =>print({
                            printable: notices, header: 'User Details',
                            properties:
                            [
                            {field: 'faculty', displayName:'Employee ID'},
                            {field: 'date', displayName:'Email'},
                            {field: 'topic', displayName:'Name'},
                            {field: 'notice', displayName:'NIC'},
                           
                        ],
                            type:'json'
                            })}> 
                            print Details
                            &nbsp;
                            <i class="fa fa-print" aria-hidden="true"></i> </button> */}
                </div>

                <table class="table table-striped mt-3">
                  <thead className="table-primary">
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
                    {user
                      .filter((val) => {
                        // if (search === "") {
                        //   return val;
                        // } else
                        if (
                          search === "" &&
                          val.role.toLowerCase().includes(category)
                        ) {
                          return val;
                        } else if (
                          val.regNumber
                            .toLowerCase()
                            .includes(search.toLowerCase()) ||
                          val.role
                            .toLowerCase()
                            .includes(search.toLowerCase()) ||
                          val.lastName
                            .toLowerCase()
                            .includes(search.toLowerCase()) ||
                          val.faculty
                            .toLowerCase()
                            .includes(search.toLowerCase())
                        ) {
                          console.log(val);
                          return val;
                        }
                        return 0;
                      })

                      .map((user) => (
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
                              className="btn btn-info"
                              onClick={() => updteClicked(user._id)}
                            >
                              Update
                            </button>
                          </td>
                          <td>
                            <button
                              className="btn btn-danger"
                              onClick={() => dleteClicked(user._id)}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>

                {/* <div>
                  <label>
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() => {
                        setChecked(!checked);
                        setAdminFilter("admin");
                        setTimeout(function () {
                          if (checked.toString() != "true") {
                            console.log(adminFilter);
                          }
                          console.log("Executed after 1 second");
                        }, 1000);
                      }}
                    />
                    My Value (admin)
                  </label>

                  <p>Is "My Value" checked? {checked.toString()}</p>
                </div> */}

                {/* <button
                  className="btn btn-primary w-25 mt-3"
                  onClick={AddStudent}
                >
                  Add User
                </button> */}
                <br></br>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserList;
