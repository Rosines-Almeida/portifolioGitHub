import React, { Component } from 'react'
import Search from "../search/Search"
import User from "../user/User"
import api from "../../services/api"
import "./main.css"

 class Main extends Component {
    state = {
         userGit: [] 
    }

     notificar =async (userSearch) =>{
    const response = await api.get(`/rosines-almeida`);
    // const response = await api.get(`/${userSearch}`);
     console.log("re", response)
    this.setState({userGit: response.data})
  
   }
    

    // notificar = async text => {
    //     const response = await searchPhotos(text)
    //     this.setState({ images: response.data.hits })
    // }
    render() {
        return (
            <div  className="search-component">
                <Search  className="search-component" notificar = {this.notificar}></Search>
               <User className="mt-5 mb-5"  user={this.state.userGit} />
            </div>
        )
    }
}
export default Main
