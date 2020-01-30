import React, { Component } from 'react'
import "./search.css"

export default class Search extends Component {
    state = {
        user: {},
        props: this.props
    }
    updateUser = (evt) => {
        this.setState({user: evt.target.value})
       console.log(this.state.user)
    }
    
    render(props) {
        return (
            <label>
            Pesquise:
            <input type="search" onChange={this.updateUser}/> <button  onClick={() => this.state.props.notificar(this.state.user)}>Search</button>
        
            </label>
          
        )
    }
}
