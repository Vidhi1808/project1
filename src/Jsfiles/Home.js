import Navbar from './Navbar';
import '../Cssfiles/Home.css';
import Element from './Element';
import Footer from './Footer';
import Box from './Box';
import Academics from './Academics';
import Body from './Bodymain'
import {useLocation} from "react-router-dom";
function Home(){
    const location=useLocation()
 
return (
    <div>
        <Navbar></Navbar>

          <div className="info">
 <h1>
  
   University Institute of Engineerging and Technology,Panjab University,Chandigarh
 </h1> 
 </div >
 <div>
 <Academics></Academics>
<Element></Element>
<Box></Box>
<Body></Body>
<Footer></Footer>

 </div>
 
    </div>

);
}
export default Home;