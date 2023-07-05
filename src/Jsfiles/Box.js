import '../Cssfiles/Box.css';
import Boxdata from './Boxdata';
import img1 from '../Components/campus-life-3.jpg';
import img2 from '../Components/download (1).jpg';
import img3 from '../Components/images.jpg';
import img2_1 from '../Components/2image1.jpg';
import img2_2 from '../Components/2image2.jpg';
import img2_3 from '../Components/2image3.jpg';
function Box(){
    return(
        <>
        <div className="campus">
           <h1>Campus Life</h1>
            
            <div className="list">
            <Boxdata image={img1} heading={"Why I Changed My Mind About Career Connections"}></Boxdata>
            <Boxdata image={img2} heading={"Art,Exercise And Escapism in Nature"}></Boxdata>
            <Boxdata image={img3} heading={"Improve Athletic Performance Tips"}></Boxdata>
           
            </div>
        </div>
         <div className="campus awards">
         <div id="Campuslife"><h1>Student Awards</h1></div>
         
         <div className="list">
         <Boxdata image={img2_1} heading={"Distinguished Alumni & Hall of Fame"}></Boxdata>
         <Boxdata image={img2_2} heading={"College-Granted Faculty Awards"}></Boxdata>
         <Boxdata image={img2_3} heading={"Student Awards"}></Boxdata>
        
         </div>
     </div>
     </>
    );
}
export default Box;