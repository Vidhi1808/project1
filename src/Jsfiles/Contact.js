// import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import '../Cssfiles/Contact.css';

function Contact(){
    console.log('helo');
return (
    <>
        <Navbar></Navbar>
        <div classname="contactbody">
        <div className="heading">
        <h1>CONTACT US
        </h1>
     </div>
     <div>
        <h2 className="hello">FOR ANY QUERY</h2>
     </div>
     <div className="address">

      <h3>University Institute of Engineering and Technology<br/>
Sector 25, South Campus,<br/>
Panjab University,<br/>
Chandigarh (Union Territory),<br/>
INDIA<br/>

PINCODE: 160014
      </h3>  
     </div>
     <div>
     <div>
     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13715.278723990925!2d76.74783190231452!3d30.751566193199057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fedecdda11b85%3A0x49992ec0501060ac!2sUNIVERSITY%20INSTITUTE%20OF%20ENGINEERING%20AND%20TECHNOLOGY%2C%20Sector%2025%2C%20Chandigarh!5e0!3m2!1sen!2sin!4v1687938738044!5m2!1sen!2sin" width="900" height="550" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

</div>
     </div>
        </div>
        
   
    <Footer></Footer>
    </>
);
}
export default Contact;