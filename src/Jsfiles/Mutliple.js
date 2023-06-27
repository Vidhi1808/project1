import React,{useState} from 'react';
import '../Cssfiles/Multiple.css';
const Multiple=()=>{
   
const [register,setregister]=useState({
    username:"",
    email:"",
    phone:"",
    password:""
});
const [records,setrecords] =useState([]);
const handleinput=(e)=>{
const name=e.target.name;
const value=e.target.value;
setregister({...register, [name]:value})
    }
const handleSubmit=(e)=>{
e.preventDefault();
const newRecord={...register,id:new Date().getTime().toString()}
console.log(records);
setrecords([...records,newRecord]);   
// console.log(records);
setregister({username:"",email:"",phone:"",password:""});
}
    return(
      <>
        <div className="form">
            <h1>Sign Up</h1>
                <form action="" onSubmit={handleSubmit} className="formmain">
                    <div className="form1">
                    <div>
                <label htmlFor="username">username</label><br></br>
                <input type="text" autoComplete="off" value={register.username} onChange={handleinput} name="username" id="username"/>
            </div>
            <div>
                <label htmlFor="email">email</label><br></br>
                <input type="email" autoComplete="off" value={register.email} onChange={handleinput} name="email" id="email"/>
            </div>
            <div>
                <label htmlFor="phone">phone</label><br></br>
                <input type="phone" autoComplete="off" value={register.phone} onChange={handleinput} name="phone" id="phone"/>
            </div>
            <div>
                <label htmlFor="password">password</label><br></br>
                <input type="password" autoComplete="off" value={register.password} onChange={handleinput} name="password" id="password"/>
            </div>
            <button type="submit" className="button">Registration</button>
                    </div>
            
            </form>
           
      <div>
{
    records.map((cuele)=>{
        return(
            <div className="showDataStyle">
                <table><tr>
                <td><p>{cuele.username}</p></td>
                <td><p>{cuele.email}</p></td>
<td><p>{cuele.phone}</p></td>
<td><p>{cuele.password}</p></td>

                </tr>
                   </table>

            </div>
        )
    })
}
      </div>
      </div>
      </>
    );
}
export default Multiple;