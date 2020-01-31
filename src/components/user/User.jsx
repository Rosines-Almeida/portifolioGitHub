import React from 'react';
import "./User.css"
import { Link } from "react-router-dom";
import Logo2 from "../../assets/Octocat.png"
import formatarData from "../../util"

const User = (props) =>




<div>
{/* bloco img logo */}
    <div  style={{ display: props.user.length === 0 ? "block" : "none" }} > 
    <div className="d-flex justify-content-center">
    <img src={Logo2} width="300px" height="300px" className="d-inline-block align-top " alt="" />
    </div>
    </div>
{/* info user */}
 
 

   <div  style={{ display: props.user.length === 0 ? "none" : "block" }}>
<div className="card-group row col-6 d-flex justify-content-center">
  <img className="card  img-user" src={props.user.avatar_url} alt="Imagem de capa do card"/>
    
  
  
  <div class="card">
    {/* <img class="card-img-top" src=".../100px180/" alt="Imagem de capa do card"/> */}
    <div className="card-body">
      <h5 className="card-title">{props.user.login}</h5>
      <p>Repositorios <strong> {props.user.public_repos}</strong></p>
        <p>Seguidores <strong>{props.user.following}</strong></p>
        <p>Seguindo <strong>{props.user.followers}</strong></p>
        <p>Última atualização <strong>{formatarData(props.user.updated_at)}</strong></p>
      <p className="card-text"><small class="text-muted">Atualizados 3 minutos atrás</small></p>
      <button> 
<Link to={`/repositorios/${props.user.login}/`} > Conheça os projetos </Link>
   
</button>
    </div>
  </div>
 
</div>
  </div>
  </div>

export default User