import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import './App.css';

// //Importing Pokemon Card 1 and Card 2
// import Poke1 from './components/Poke1';
// import Poke2 from './components/Poke2';

// import axios from 'axios';

// //Calling Redux library and Redux action
// import { connect } from "react-redux";
// import addPokemon from './redux/actions/actions';
// var addPokemon1 = addPokemon.addPokemon1;
// var addPokemon2 = addPokemon.addPokemon2;


class App extends React.Component {

  render() {

    return (

      <div>
        <Header/>
      </div>
      )
  }
}

export default App;