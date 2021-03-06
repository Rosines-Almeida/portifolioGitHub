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
            <container> 
            
            <div className="input-group mb-3">
  <input type="text" className="form-control" placeholder="Pesquise o usuário" aria-label="Recipient's username" aria-describedby="button-addon2" onChange={this.updateUser} />
  <div className="input-group-append">
    <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={() => this.state.props.notificar(this.state.user)}>Pesquisar</button>
  </div>
</div>
         
            </container>

        )
    }
}
