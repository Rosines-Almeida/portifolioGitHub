import React from 'react';
import  "./User.css"
import { Link } from "react-router-dom";

const User = (props) => 


<div style={{display: props.user.length === 0 ? "none" : "block"}}>
        <img className="img" src ={props.user.avatar_url}></img>
          <h2>{props.user.login}</h2>
<p>{props.user.bio}</p>
<h3>Repositorios</h3> <strong> {props.user.public_repos}</strong>
<button> 
<Link to={`/repositorios/${props.user.login}/`} > Conheça os projetos </Link>
   
</button>
 
       
    </div>


export default User