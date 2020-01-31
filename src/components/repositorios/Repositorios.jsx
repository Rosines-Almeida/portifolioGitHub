import React, { Component } from 'react'
import api from "../../services/api"
import "./Repositorios.css"
import {formatarData} from "../../util"
import Header from "../header/Header"
 
export default class Repositorios extends Component {
    state={
        repositorios:[]

    }
    async componentDidMount(){
        const {user} = this.props.match.params;
       const response = await api.get(`${user}/repos`)    
        this.setState({repositorios: response.data})
        console.log("repositorios", this.state.repositorios)
    }
    

    render() {
         
           return(
               
        <div>
          <Header/>
            {this.state.repositorios.map(repo=>
            <div class="card mt-2 mr-4 ml-4">
            <div class="card-body">
            <h5 ><strong>{repo.name}</strong></h5> 
            <hr/> 
            <p className="desciption">{repo.description}</p>
            <p><strong>Linguagem: </strong>{repo.language}</p>
            <p><strong>Criado: </strong>{formatarData(repo.created_at)}</p>
            <div className="d-flex"> 
            <div  style={{ display: repo.homepage? "block" : "none" }}>
            <a class="btn btn-homepage mt-2" data-toggle="collapse" href={repo.homepage}role="button" aria-expanded="false" aria-controls="collapseExample">
   Homepage
  </a>
  </div>
  <a class="btn btn-homepage mt-2 ml-5" data-toggle="collapse" href={repo.html_url}role="button" aria-expanded="false" aria-controls="collapseExample">
   Código Fonte
  </a>

  </div>
           
            </div>
          </div>)}
          
            
        </div>
            // <div>
            //     {this.state.repositorios.map(repo=>
            //     <div> {repo.name}</div>
            //    )}
 
            // </div>
        )
    }
}
