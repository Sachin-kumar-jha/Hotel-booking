import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import axios from 'axios';

const Login = () => {
    const [crendential,setCredential]=useState({username:undefined,password:undefined,});

    const {user,looading,error,dispatch}=useContext(AuthContext);

    const handleChange=(e)=>{
            setCredential(prev=>({...prev,[e.target.id] : e.target.value}));
    }

    const handleClick= async (e)=>{
        e.preventDefault()
        dispatch({type:"LOGIN_START"})
        try{
       const res= await axios.post("http://localhost:8800/api/auth/login",crendential);
           dispatch({type:"LOGIN_SUCCESS",payload:res.data});
        }catch(err){
            dispatch({type:"LOGIN_FAILURE",payload:err.response.data})
        }
    };
    console.log(user);
  return (
    <div className="Login">
        <div className="lcontainer">
            <input type="text" onChange={handleChange} id="username" placeholder='username' className="linput" />
            <input type="password" onChange={handleChange} id="password" placeholder="password"  className="linput" />
            <button className="lbtn" onClick={handleClick}>Login</button>
            {error && <span>{error.message}</span>}
        </div>
    </div>
  )
}

export default Login