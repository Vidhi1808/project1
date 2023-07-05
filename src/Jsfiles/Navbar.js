// import './Navbar.css';

//  class Navbar extends Component
import React,{ Component } from 'react';
import logo from '../Components/download (2)_prev_ui.png'
import {Menuitem} from './Menuitem';
import '../Cssfiles/Navbar.css';
import {Link} from "react-router-dom";

class Navbar extends Component{
render(){
  
    return (
        <nav className="navbar">
            <img src={logo} alt="Logo"/>
            <h1>UIET</h1>
           <ul>
            {Menuitem.map((item,index)=>{
                return (
                    <li key={index}>
                    <Link className="link" to={item.url}><i className={item.icon}></i>{item.title}</Link>
                    </li>
                );
            })}
        
        </ul>
        </nav>
    );
}
}
export default Navbar;