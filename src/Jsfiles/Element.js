import '../Cssfiles/Element.css';
import img from '../Components/download.jpg'
import calculator from '../Components/tut7.htm';
const Element=()=>{
    return(
<div class="tour">

<div class="main">
<h1>Campus Information</h1>
<ul>
<li><a href="#Admission">Admission for NRI/Foreign National</a></li>
    <li><a href="#Scholarships">Scholarships</a></li>
    <li><a href="#Sports">Sports Facility</a></li>
    <li><a href="#Hostel">Hostel Facility</a></li>
    <li><a href="#Placements">Placements</a></li>
    <li><a href="#Alumni">Our Alumni</a></li>
    <li><a href={calculator}>Result Calculator</a></li>
    
</ul>
</div>
<div><img src={img}/></div>
 </div>  
    );
}
export default Element;