import React from 'react';

import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import App from '../App';

// import Knowmore from './Knowmore';
// import Battle from './Battle';

// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link
//   } from "react-router-dom";

class Home extends React.Component {

    render(){
        return (
            <div>
                <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <img style={{width: "50%", height: "50%", marginTop: "4%"}} className="rounded" src="images/pokemons.jpg" alt=" " />
                </div>
                <div style={{textAlign: "center"}}><h3>Welcome to Pokemon App, here you can Know about your Favourite Pokemon<br/> also, You can have Battle with friends and See who Wins!</h3></div>
            </div>
            );
        }
    }



export default Home;