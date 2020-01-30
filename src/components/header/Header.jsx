import React from 'react';
import  "./Header.css";
import Logo1 from "../../assets/git-hub-img.png"

const Header = () =>
    // <div className="portifolio">
    //     <h2>PORTIFOLIO</h2>
    // </div>
    
    <nav className="navbar d-flex justify-content-start">
 
      <img src={Logo1} width="30px" height="30px" className="justify-content-start mr-5" alt=""/>
    <div>   Portifólio <strong> GitHub </strong>  </div> 
      
  </nav>
 

export default Header

