import React, { Component } from 'react'
import api from "../../services/api"

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
                {this.state.repositorios.map(repo=>
                <div> {repo.name}</div>
               )}
 
            </div>
        )
    }
}
