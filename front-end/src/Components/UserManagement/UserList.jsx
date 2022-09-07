import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import UserServices from "../Service/UserServices";


const UserList =()=>{
    const [user, setUser]= useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
        UserServices.getAllUsers().then(
            res=>{
                setUser(res.data)
            }
        )
    })

    const AddStudent = (e)=>{
        e.preventDefault()
        navigate("/user/-1")
    }
    const updteClicked =(id)=>{
        // navigate(`/list/${id}`)
        navigate(`/user/${id}`)
    }
    const dleteClicked =(id)=>{
        UserServices.deleteUser(id)
        console.log(id)
    }
    return(
        <div>
            <button onClick={AddStudent}>Add student</button>
            <h1>User list</h1><br/>

            <table>
                <thead>
                    <tr>
                    <th> Reg Number</th>
                        <th>Last Name</th>
                        <th>Initials</th>
                        <th>Mobile Number</th>
                        <th>Email</th>
                        <th> Faculty</th>
                        <th> Role</th>
                        <th>Update</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        user.map(
                            user =>
                            <tr key={user._id}>
                                    <td>{user.regNumber}</td>
                                    <td>{user.lastName}</td>
                                    <td>{user.initials}</td>
                                    <td>{user.mobileNumber}</td>
                                    <td>{user.email}</td>
                                    <td>{user.faculty}</td>
                                    <td>{user.role}</td>
                                    
                                <td><button onClick={()=>updteClicked(user._id)}>Update</button></td>
                                <td><button onClick={()=>dleteClicked(user._id)}>Delete</button></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>

        </div>
    )
}
export default UserList;
