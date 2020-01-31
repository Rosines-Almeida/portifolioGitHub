import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Header from "./components/header/Header"
import Routes from "./rotas/Routes"
// import Search from "../src/components/search/Search"
// import User from "../src/components/user/User"

ReactDOM.render(<React.Fragment>

<Routes></Routes>
</React.Fragment>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
