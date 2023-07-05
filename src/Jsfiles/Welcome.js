import Navbar from './Navbar';
import Footer from './Footer';
import {useLocation} from "react-router-dom";
import '../Cssfiles/Welcome.css';
import {Link} from "react-router-dom";
function Welcome(){
    const location=useLocation()
  
return (
    <div>
        <Navbar></Navbar>
        <br></br>
        <br></br>
        <br/><br/>

          <div className="main1">
 <h1>Hello {location.state.id},</h1>
 <p>Welcome in University Institute of Engineerging and Technology,Panjab University,Chandigarh</p> 
 
   <div className="link1">
 <Link className="link" to="/project1"><button>Go to Home Page</button></Link>
 </div>
 </div> </div>
);
}
export default Welcome;