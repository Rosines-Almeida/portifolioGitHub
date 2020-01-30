import React from 'react';

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Main from "../components/main/main"
import Repositorios from "../components/repositorios/Repositorios"


const  Routes = ()=>(
    <BrowserRouter>
    <Switch>
        <Route exact path="/" component={Main}/> 
        <Route path="/repositorios/:user" component={Repositorios}/> 
    </Switch>
    </BrowserRouter>
);
 export default Routes;