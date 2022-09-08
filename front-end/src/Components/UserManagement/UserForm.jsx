import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import UserServices from "../Service/UserServices.js";

const UserForm =(params)=>{
    const [status, setstatus] = useState("");
    const {id} = useParams();
    const [user, setUser] = useState([]);
    const [lastName, setlastName] =useState("");
    const [initials, setinitials] = useState("");
    const [email, setemail] = useState("");
    const [mobileNumber, setmobileNumber] = useState("");
    const [faculty, setfaculty] = useState("");
    const [regNumber, setregNumber] = useState("");
    const [password, setpassword] = useState("");
    const [role, setrole] = useState("user");
    const nav = useNavigate();

    useEffect(()=>{
        
        if (id=="-1"){
            setstatus("Register New ") 
            // console.log(id);
        }else{
            setstatus("Update ")
            UserServices.getUser(id).then(
                res=>{
                    setUser(res.data)
                    // console.log(user)
                }
            )
            // console.log(id);
        }
    },[])

    const submitClicked=(e)=>{
        e.preventDefault();
        if (id == "-1"){
            const newuser ={
                lastName,
                initials,
                email,
                mobileNumber,
                faculty,
                regNumber,
                password,
                role
            }
            UserServices.createUser(newuser).then(
                res=>{
                    // setstudent(res.data)
                    console.log(res.data);
                    // if (res.data.role == "student"){
                    //     console.log("true:student");
                    //     // nav("/StudentHome")
                    // }else if (res.data.role == "admin"){
                    //     console.log("true:admin");
                    //     nav("/AdminHome")
                    // }
                    nav("/login")
                }
            ).catch(err => {
                console.log("failed");
            })
            // nav("/users")
            console.log(newuser);
        }else{
            const newuser ={
                lastName,
                initials,
                email,
                mobileNumber,
                faculty,
                regNumber,
                password,
                role
            }
            UserServices.updateUser(id, newuser)
            nav("/users")
            console.log(newuser);
        }
        
    }
    // console.log(user)
    return(
        
    
        <div>
        <h1>{status} User</h1>
        <form onSubmit={submitClicked}>
        <label>Fist Name : </label>
        <input type="text"  onChange={(e)=>{setlastName(e.target.value)}} required></input>
        <br></br>
        <label>Initials  : </label>
        <input type="text"  onChange={(e)=>{setinitials(e.target.value)}} required/>
        <br></br>
        <label>Mobile number  : </label>
        <input type="text"  onChange={(e)=>{setmobileNumber(e.target.value)}} required/>
        <br></br>
        <label>email  : </label>
        <input type="text"  onChange={(e)=>{setemail(e.target.value)}} required/>
        <br></br>
        {/* dropdown */}
        <label>Faculty  : </label>
        <input type="text"  onChange={(e)=>{setfaculty(e.target.value)}} required/>
        <br></br>
        <label>Registeration Number : </label>
        <input type="text"  onChange={(e)=>{setregNumber(e.target.value)}} required/>
        <br></br>
        <label>Password  : </label>
        <input type="text"  onChange={(e)=>{setpassword(e.target.value)}} required/>
        <br/>
        <input type="submit" value="Submit" />
      </form>
    </div>
    )
}
export default UserForm;