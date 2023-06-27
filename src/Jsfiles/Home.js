import Navbar from './Navbar';
import '../Cssfiles/Home.css';
import Element from './Element';
import Footer from './Footer';
import Box from './Box';
import Academics from './Academics';
function Home(){
    console.log('hello');
return (
    <div>
        <Navbar></Navbar>

          <div className="info">
 <h1>
    University Institute of Engineerging and Technology,Panjab University,Chandigarh
 </h1> 
 </div>
 <Academics></Academics>
<Element></Element>
<Box></Box>
<Footer></Footer>
    </div>

);
}
export default Home;