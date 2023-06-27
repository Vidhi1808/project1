import React from 'react'
import './Tut4.css';
export default function () {
  return (
    <>
     <div className="container">
    <div className="form-box">
        <h1>Register Now</h1>
      <form name="myform" onsubmit="return validateform()" method="post"> 
        <div className="group">
            <div className="field">
                <i className="bi bi-person-circle"></i>
              <input type="text" placeholder="Name" name="fname" required/> 
            </div>
            <span id="errorname"></span>
            <div className="field">
                <i className="bi bi-envelope-fill"></i>
                <input type="email" placeholder="Email Id" name="email" required/>
              </div>
              <span id="errormail"></span>
              <div className="field">
                <i className="bi bi-phone-fill"></i>
                <input type="phone" placeholder="Phone No." name="phone"  required/> 
              </div>
              <span id="errorphone"></span>
              <div className="field">
                <i className="bi bi-lock-fill"></i>
                <input type="password" placeholder="password" name="password" required/>
              </div>
              <span id="errorpassword"></span> 
              <div className="field">
                <i className="bi bi-lock"></i>
                <input type="password" placeholder="confirm password" name="confirm" required/> 
              </div>
              <span id="errorconpassword"></span>
              <div className="submit">
                <input type="submit" value="Register" onclick="myfunction()"/> 
              </div>
        </div>
      </form>
    </div>
    
 </div>  

    </>
  );
}
