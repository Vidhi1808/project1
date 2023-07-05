import Navbar from './Navbar';
import Footer from './Footer';
import React,{useEffect,useState} from "react";
import axios from "axios";
import {useNavigate,Link} from "react-router-dom";
import '../Cssfiles/Multiple.css';

function Login1(){

    const history=useNavigate();
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    async function submit(e){
        e.preventDefault();
        try{
await axios.post("http://localhost:8000/login",{
    email,password
})
.then(res=>{
  if(res.data=="exist"){
history("/welcome",{state:{id:email}})
  }
  else if(res.data=="notexist"){
    alert("User have not sign up")
      }
})
.catch(e=>{
    alert("wrong details")
    console.log(e);
})
        }
        catch(e){
console.log(e);
        }
    }
    return(
        <div className="login">
       <Navbar></Navbar>  
       <br></br>
       <br></br> 
       <br></br>
       <br></br>  
       <div className="form">
 <h1>Login</h1>  
 <form action="POST" className="formmain">
  <div className="form1">
    <input type="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email" name="" id=""></input>
    <input type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password" name="" id=""></input>
    <input type="submit" onClick={submit} className="submit"/>
    </div>
    </form> 
    </div>
   <Footer></Footer>

</div>
    )

}

export default Login1