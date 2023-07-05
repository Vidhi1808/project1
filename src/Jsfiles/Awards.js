import Navbar from './Navbar';
import Footer from './Footer';
import '../Cssfiles/Awards.css';
import img from '../Components/md-duran-1VqHRwxcCCw-unsplash.jpg';
function Awards(){
  
 
return (
    <div>
        <Navbar></Navbar>
<div className="awardsinfo">
 <h1>
   Awards
 </h1> 
 </div>
 <div class="tour1">

<div class="main">
<h1>Post Categories</h1>
<ul>
<li>Bussiness Analytics</li>
    <li>Data Science</li>
    <li>Machine learning</li>
    <li>Computer Science</li>
    <li>Auto CAD</li>
</ul>
</div>
<div><img src={img}/></div>
 </div>
<div class="comment-box">
  <h3>Leave a Comment</h3>
  <form class="comment-form">
<input type="text" placeholder="Enter Name"></input>
<input type="email" placeholder="Enter Email"></input>
<textarea rows="5" placeholder="Your comment"></textarea>
<button type="submit" class="button">POST COMMENT</button>
  </form>
</div>

<Footer></Footer>
 </div>


);
}
export default Awards;