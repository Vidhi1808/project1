import Navbar from './Navbar';
import Footer from './Footer';
import React,{useEffect,useState} from "react"
import axios from "axios";
import {useNavigate,Link} from "react-router-dom"
import '../Cssfiles/Signup.css';

function Signup1(){
    const history=useNavigate();
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [phone,setPhone]=useState('')
    async function submit(e){
        e.preventDefault();
        try{
await axios.post("http://localhost:8000/signup",{
    name,email,password,phone
})
.then(res=>{
    if(res.data=="exist"){
        alert("User alredy exists")
 // history("/project1",{state:{id:email}})
    }
    else if(res.data=="notexist"){
       //alert("User not exists")
    history("/project1",{state:{id:email}})
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
       <div className="container">
        <div className="form-box">
 <h1>Register Now</h1>  
 <form action="POST">
    <div className="group">
    <div className="field">
    <i className="bi bi-person-circle"></i>
                <input type="text" onChange={(e)=>{setName(e.target.value)}} placeholder="Name" name="" id="" required></input>
    </div>
    <div className="field">
    <i className="bi bi-envelope-fill"></i>
     <input type="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email" name="" id="" required></input>
    </div>
    <div className="field">
    <i className="bi bi-lock-fill"></i>
    <input type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password" name="" id="" required></input>
    </div>
    <div className="field">
                <i className="bi bi-phone-fill"></i>
                <input type="text" onChange={(e)=>{setPhone(e.target.value)}} placeholder="Phone" name="" id="" ></input>
    
              </div>
    <div className="submit field">
        <input type="submit" onClick={submit}/>
    </div>
    
    </div>
    </form> 
</div></div>
   <Footer></Footer>

</div>
    )

}

export default Signup1