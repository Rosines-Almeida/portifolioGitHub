import React, { Component } from 'react'
import Search from "../search/Search"
import User from "../user/User"
import api from "../../services/api"
import "./main.css"
 

 class Main extends Component {
    state = {
         userGit: [],
         erro: false
    }
     notificar= async (userSearch) =>{
        try {
          const response = await api.get(`/${userSearch}`);
        //   const response = await api.get(`/rosines-almeida`);
          this.setState({userGit: response.data})
        } catch (error) {
            this.setState({erro: true})
          console.log(error.message)
     
        }
      }


    render() {
        return (
            <div  className="search-component">
            
                <Search  className="search-component" notificar = {this.notificar}></Search>
               <User className="mt-5 mb-5 d-flex-justify-content-center"  user={this.state.userGit} erro={this.state.erro} />
            </div>
        )
    }
}
export default Main
