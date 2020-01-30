import React from 'react';
import  "./User.css"
import { Link } from "react-router-dom";
import Logo2 from "../../assets/Octocat.png"
const User = (props) => 

<div className="d-flex justify-content-center">
<div style={{display: props.user.length === 0 ? "block" : "none"}} > <img src={Logo2} width="300px" height="300px" className="d-inline-block align-top" alt=""/>
            </div>
<div style={{display: props.user.length === 0 ? "none" : "block"}}>
        <img className="img" src ={props.user.avatar_url}></img>
          <h2>{props.user.login}</h2>
<p>{props.user.bio}</p>
<h3>Repositorios</h3> <strong> {props.user.public_repos}</strong>
<button> 
<Link to={`/repositorios/${props.user.login}/`} > Conheça os projetos </Link>
   
</button>
 
       
    </div>
    </div>


export default User