import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import UserServices from "../Service/UserServices";

const LoginForm =(params)=>{
    const [regNumber, setregNumber] =  useState("");
    const [password, setpassword] = useState("");
    const nav = useNavigate();

    useEffect(()=>{
        
    },[])

    const submitClicked=(e)=>{
        e.preventDefault();
        const loginTemplate ={
            regNumber,
            password
        }
        
        UserServices.login(loginTemplate).then(
            res=>{
                // setstudent(res.data)
                console.log(res.data);
                if (res.data.role == "student"){
                    console.log("true:student");
                    nav("/StudentHome")
                }else if (res.data.role == "admin"){
                    console.log("true:admin");
                    nav("/AdminHome")
                }
            }
        ).catch(err => {
            console.log("failed");
        })
        // nav("/students")
        
        console.log(loginTemplate);
        
        
    }
    return(
        <div>
        <form onSubmit={submitClicked}>
        <label>Registeration Number : </label>
        <input type="text"  onChange={(e)=>{setregNumber(e.target.value)}}required></input>
        <br></br>
        <label>Password : </label>
        <input type="text"  onChange={(e)=>{setpassword(e.target.value)}} required/>
        
        <br/>
        <input type="submit" value="Submit" />
      </form>
    </div>
    )
}
export default LoginForm;