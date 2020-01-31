import React from 'react';
import "./User.css"
import { Link } from "react-router-dom";
import Logo2 from "../../assets/Octocat.png"
import {formatarData , validarDados }from "../../util"


const User = (props) =>




<div>
{/* bloco img logo */}
    <div  style={{ display: props.user.length === 0 ? "block" : "none" }} > 

    <div className="justify-content-center">
<div style={{ display: props.erro? "block" : "none" }} >
    <div class="alert alert-light d-flex justify-content-center" role="alert">
   Usuário não encontrado. Por favor refaça a busca.
</div>
</div>
      <div className = "d-flex justify-content-center" >
    <img   src={Logo2} width="300px" height="300px" className="d-inline-block align-top " alt="" />
    </div>
    </div>
    </div>
{/* info user */}
 
 

   <div  style={{ display: props.user.length === 0 ? "none" : "block" }}>
     <div className="row d-flex justify-content-center">
<div className="card-group row col-6 ">
  <img className="card  img-user" src={props.user.avatar_url} alt="Imagem de capa do card"/>
    
  
  
  <div class="card">
    {/* <img class="card-img-top" src=".../100px180/" alt="Imagem de capa do card"/> */}
    <div className="card-body">
      <h5 className="card-title">{props.user.login}</h5>
      <p>Repositorios <strong> {props.user.public_repos}</strong></p>
        <p>Seguidores <strong>{props.user.following}</strong></p>
        <p>Seguindo <strong>{props.user.followers}</strong></p>
        <p>  <strong>{props.user.company}</strong></p>
    <a href={props.user.blog}> {props.user.blog}</a>
        <p>  <strong>{props.user.location}</strong></p>
        <p>Última atualização <strong>{formatarData(props.user.updated_at)}</strong></p>
    
      <button className={validarDados(props.user.public_repos)? 'disable': 'active'}> 
<Link to={validarDados(props.user.public_repos) ?
  `/#` : `/repositorios/${props.user.login}/`} className={validarDados(props.user.public_repos)? 'disable': 'active'}> Conheça os projetos </Link>
 
</button>
    </div>
  </div>
 
</div>
</div>
  </div>
  </div>

export default User