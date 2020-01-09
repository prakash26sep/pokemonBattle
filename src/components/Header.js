import React from 'react';

import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import App from '../App';

import Home from './Home';
import Knowmore from './Knowmore';
import Battle from './Battle';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class Header extends React.Component {

    render(){
        return (
            <Router>
                <div className="header">
                    <img src="images/pokemonlogo.png" style={{ width: "10%", height: "0.4%" }} alt="logo" />
                    
                    <div className="header-right">
                        <Link to="/">Home</Link>
                        <Link to="/startbattle">Start Battle</Link>
                        <Link to="/knowmore">Know About Your Pokemon</Link>
                    </div>
                </div>
                <Switch>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="/startbattle">
                       <Battle/>
                    </Route>
                    <Route path="/knowmore">
                        <Knowmore/>
                    </Route>
                </Switch>
            </Router>
            );
        }
    }



export default Header;