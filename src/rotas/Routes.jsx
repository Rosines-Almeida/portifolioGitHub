import React from 'react';

import { BrowserRouter, Switch, Route } from "react-router-dom";

import App from "../components/app/App"
// import Main from "../components/main/main"
import Repositorios from "../components/repositorios/Repositorios"
 


const  Routes = ()=>(
    <BrowserRouter>
    <Switch>
        <Route exact path="/" component={App}/> 
        <Route path="/repositorios/:user" component={Repositorios}/> 
    </Switch>
    </BrowserRouter>
);
 export default Routes;