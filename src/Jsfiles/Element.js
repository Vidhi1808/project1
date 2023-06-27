import '../Cssfiles/Element.css';
import img from '../Components/download.jpg'
const Element=()=>{
    return(
<div class="tour">

<div class="main">
<h1>Campus Information</h1>
<ul>
    <li>Admission for NRI/Foreign National</li>
    <li>Scholarships</li>
    <li>Sports Facility</li>
    <li>Hostel Facility</li>
    <li>Placements</li>
    <li>Our Alumni</li>
    
</ul>
</div>
<div><img src={img}/></div>
 </div>  
    );
}
export default Element;