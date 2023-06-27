import '../Cssfiles/Box.css';
function Boxdata(props){
    return(
      
         <div className="item">
         <img src={props.image} alt="image"/>
         <h2>{props.heading}</h2>

         </div>   
    
    );
}
export default Boxdata;