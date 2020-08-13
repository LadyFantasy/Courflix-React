import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Route} from "react-router-dom" 
import Home from "./pages/Home"
import Seleccion from "./pages/Seleccion"


ReactDOM.render(
 <Router>
   <Route exact path="/" component={Home} />
   <Route exact path="/selection/:id" component={Seleccion} />
 </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
