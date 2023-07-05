import React from 'react'
import '../Cssfiles/Bodymain.css';
import img1 from '../Components/twitter.png';
import img2 from '../Components/facebook.png';
import img3 from '../Components/instagram (1).jpg'; 
import img4 from '../Components/linkedin.png';
import college from '../Components/download.htm';
import seat from '../Components/tut2.htm';
import research from '../Components/tut3.htm';
export default function Bodymain() {
  return (
    <>

<div class="stat">
    <h1 class="head">Student Statistics</h1>
<div class="number">
 <div class="n1">
    <h1>Admission per department every year
        </h1>
    <a href={seat}><i class="bi bi-chevron-double-right"></i>Click for seat matrix</a>
        </div>
 <div class="n2">
    <h1>Research paper published per year
        </h1>
    <a href={research}><i class="bi bi-chevron-double-right"></i>Click for research paper published dates</a>
        </div>
</div>  
</div>


<div class="social">
    <h1>Social Media</h1>
<div class="links">
   <div><a href="https://twitter.com/uietchd?lang=en" target="_blank"><img src={img1}/></a></div>
    <div><a href="https://www.facebook.com/uietpuofficial/" target="_blank"><img src={img2}/></a></div>
    <div><a href="https://www.instagram.com/uietpu/?hl=en" target="_blank"><img src={img3}/></a></div>
    <div><a href="https://in.linkedin.com/school/uietpu/" target="_blank"><img src={img4}/></a></div>
    
</div>
<p>Click on icon to visit UIET social media website</p>

</div>



<div>
 <iframe src={college} height="600" width="97%" title="Iframe Example">
 </iframe>  
</div>
<br></br>
<br></br>
<br></br>
<br></br>
</>


//  <div class="regform" id="regformid">
// <h1>Registration Form<h1></h1>
//     <form>
//         <div>
//         <!-- <label for="name">Name:</label> -->
//     <input type="text" placeholder="Name" class="form1" required>
//     </div>
//     <div>
//     <!-- <label for="mail">Email Id:</label> -->
//     <input type="mail" placeholder="Email" class="form1" required>
//     </div>
//     <div>
//     <!-- <label for="date">Date of birth:</label> -->
//     <div>
//         <!-- <label for="password">Password:</label> -->
//         <input type="password" placeholder="Password" class="form1" required>
//         </div>
//     <input type="date" class="form1">
//     </div>
//     <div>
//    <div>
//         <input type="checkbox" required>
//         <label for="eligible">I agree to the defied terms and conditions</label>
//         </div>
//     <div> <br>
// <input type="Submit" value="Register" class="button">
//     </div>
//     </form>

//  </div>
// </div>


//     </>
  )
}
