import '../Cssfiles/Footer.css';
import img from'../Components/download (2)_prev_ui.png';

function Footer(){
    return(
        <>
        <div className="foot">
            <div className="foot1">
        
        <h1><img src={img}></img><p>UIET</p></h1>
        <p>University Institute of Engineering and Technology was established in 2002 and is an in-campus Department of Panjab University, Chandigarh.</p>
        <p>0172-2541242<br></br>
            directoruiet@pu.ac.in</p>
    </div>
    <div class="foot2"><h1>Campus Life</h1>
    <ul><li>Accessibility</li>
        <li>Financial Aid</li>
        <li>Food Services</li>
        <li>Housing</li>
        <li>Information Technologies</li>
        <li>Student Life</li>
    </ul>
</div>
    <div class="foot2"><h1>Academics</h1>
        <ul><li>Catalyst</li>
            <li>Library</li>
            <li>Time Schedule</li>
            <li>Housing</li>
            <li>Apply For Addmisions</li>
            <li>Pay My Tuition</li>
        </ul> </div> </div>
        <footer><p id="foot4">Copyright © 2023 UIET, Panjab University, Chandigarh. All Rights Reserved.<br></br></p></footer>
       
        
        </>
        
    );
}
export default Footer;