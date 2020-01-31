import React from 'react';
import  "./Header.css";
import Logo1 from "../../assets/git-hub-img.png"
import { Link } from "react-router-dom";

const Header = () =>
    <nav className="navbar d-flex justify-content-start">
        <Link to={`/`} >  <img src={Logo1} width="50px" height="50px" className="justify-content-start mr-5" alt="" /></Link> 
   
    <div>Portifólio <strong> GitHub </strong>  </div> 
  
     </nav>
 
 
export default Header

