import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Header from './Header';
import '../../src/App.css';
import Footer from './Footer';

//Importing Pokemon Card 1 and Card 2
import Poke1 from './Poke1';
import Poke2 from './Poke2';

import axios from 'axios';

//Calling Redux library and Redux action
import { connect } from "react-redux";
import addPokemon from '../redux/actions/actions';
var addPokemon1 = addPokemon.addPokemon1;
var addPokemon2 = addPokemon.addPokemon2;


class Battle extends React.Component {

  constructor(props) {
    super(props);

    this.changePokemon1 = this.changePokemon1.bind(this);
    this.changePokemon2 = this.changePokemon2.bind(this);

    this.searchingPoke1 = this.searchingPoke1.bind(this);
    this.searchingPoke2 = this.searchingPoke2.bind(this);
    this.battle = this.battle.bind(this);

    //Have to remove it, because now the initial state is coming from redux store's reducer
    this.state = {
      pokemonSearch1: "pikachu",
      pokemonSearch2: "raichu",
      pokemonData1: "",
      pokemonData2: "",
      allPokemons: []
    }

  }

  //Method to change pokemon1, in state and also  redux store
  changePokemon1(e) {

    if(document.getElementById("pokemon1").value === ""){
        alert("Please Enter a Pokemon Name");
    }
    else{
        document.getElementById("winner").innerHTML = "";
        document.getElementById("score").innerHTML = "";
        this.setState({

        pokemonSearch1: document.getElementById("pokemon1").value
        }, () => {
        
        console.log(this.state.pokemonSearch1);
        this.props.addPokemon1(
            this.state.pokemonSearch1
        );
        }
        );
    }
  }

  //Method to change pokemon2, in state and also in redux store
  changePokemon2(e) {
    if(document.getElementById("pokemon2").value === ""){
        alert("Please Enter a Pokemon Name");
    }
    else{
        document.getElementById("winner").innerHTML = "";
        document.getElementById("score").innerHTML = "";
        this.setState({
        pokemonSearch2: document.getElementById("pokemon2").value
        }, () => {
        console.log(this.state.pokemonSearch2);
        this.props.addPokemon2(
            this.state.pokemonSearch2
        );
        }
        );
    }

  }

  componentWillMount() {
    axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=964`)
      .then(response => {
        //totalResults= response.data.totalResult;
        this.setState({
          allPokemons: response.data.results.map(pokemon => {
            this.state.allPokemons.push(pokemon.name);
            return null;
          })
        }, () => {
          console.log("all pokemons " + this.state.allPokemons);

          //document.getElementById("pokeLoading1").src= this.state.pokemonData1.data.sprites.front_default;
        })
      }).catch((error) => {
        console.log(error);
      });



  }

  searchingPoke1(e) {
    //Will do it later
  }

  searchingPoke2(e) {
    //let searchPoke2 = this.state.allPokemons;
    //console.log(searchPoke2);
  }

  battle() {

    document.getElementById("pokeballimage").src = "images/pokeballJumping.gif";
    document.getElementById("battleButton").style.display = "none";
    document.getElementById("winner").innerHTML = "";
    document.getElementById("score").innerHTML= "";

    setTimeout(() => {
      let pokedata1 = this.props.pokemonData1.data.stats;
      let pokedata2 = this.props.pokemonData2.data.stats;
      let power1 = 0;
      let power2 = 0;

      pokedata1.map(value1 => {
        power1 = power1 + value1.base_stat;
        return null;
      })

      pokedata2.map(value2 => {
        power2 = power2 + value2.base_stat;
        return null;
      })

      if (power1 > power2) {
        // eslint-disable-next-line
        document.getElementById("score").innerHTML = this.props.pokemonData1.data.forms[0].name.charAt(0).toUpperCase()+ this.props.pokemonData1.data.forms[0].name.slice(1) +"'s Score: " + "<div id='colorBlue'>"  +power1 +"</div>" +this.props.pokemonData2.data.forms[0].name.charAt(0).toUpperCase()+ this.props.pokemonData2.data.forms[0].name.slice(1) +"'s Score: " + "<div id='colorRed'>"  +power2 +"</div>" +"<br/>";
        document.getElementById("winner").innerHTML = "<-- Winner is " + this.props.pokemonData1.data.forms[0].name.charAt(0).toUpperCase() + this.props.pokemonData1.data.forms[0].name.slice(1) + "!";
      }
      else if (power2 > power1) {
        // eslint-disable-next-line
        document.getElementById("score").innerHTML = this.props.pokemonData1.data.forms[0].name.charAt(0).toUpperCase()+ this.props.pokemonData1.data.forms[0].name.slice(1) +"'s Score: " + "<div id='colorRed'>"  +power1 +"</div>" +this.props.pokemonData2.data.forms[0].name.charAt(0).toUpperCase()+ this.props.pokemonData2.data.forms[0].name.slice(1) +"'s Score: " + "<div id='colorBlue'>"  +power2 +"</div>" +"<br/>";
        document.getElementById("winner").innerHTML = "Winner is " + this.props.pokemonData2.data.forms[0].name.charAt(0).toUpperCase() + this.props.pokemonData2.data.forms[0].name.slice(1) + "! -->";
      }
      else{
        // eslint-disable-next-line
        document.getElementById("score").innerHTML =  "<br/>" +this.props.pokemonData1.data.forms[0].name.charAt(0).toUpperCase()+ this.props.pokemonData1.data.forms[0].name.slice(1) +"'s Score: " +power1 +"<br/>" +this.props.pokemonData2.data.forms[0].name.charAt(0).toUpperCase()+ this.props.pokemonData2.data.forms[0].name.slice(1) +"'s Score: " + power2 +"<br/><br/>" ;
        document.getElementById("winner").innerHTML = "DRAW!";
      }

      console.log(power1 + " " + power2);
      document.getElementById("pokeballimage").src = "";
      document.getElementById("battleButton").style.display = "inline";
    }, 5000);

  }

  render() {

    return (

      <div>
        
        <div className="container" style={{ display: 'flex', justifyContent: 'center', textAlign: "center", flexDirection: 'column' }}>
          <div><h2 style={{ fontSize: "95%" }}> </h2></div>
          <div></div>

          <div className="container" style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}></div>

          <div className="battleCards">

            <div style={{backgroundColor: "orange", border: "double"}}>
              <div className="form-group col-sm-12">
                <input style={{marginTop: "4%"}} className="form-control" type="text" name="pokemon1" id="pokemon1" placeholder="Select Pokemon 1" />
                
                <br />
                <button className="btn btn-primary" onClick={this.changePokemon1}>Go Pokemon 1</button>
              </div>
              <Poke1 search={this.props.pokemonSearch1.toLowerCase()} />
            </div>

            <div className="startBattle" style={{ marginTop: "10%", marginBottom: "10%"}}>

              {/* eslint-disable-next-line */}
              <img className="img-fluid" id="pokeballimage" src="" style={{width: "40%", height:"50%"}} alt={""} /><br />
              <button onClick={this.battle} id="battleButton" className="btn btn-dark btn-lg"><h1>Start Battle</h1></button><br/><br/>

              {/*eslint-disable-next-line*/}
              <h2 id="score"> </h2>
              <h1 id="winner"> </h1>
            </div>


            <div style={{backgroundColor: "orange", border: "double", marginBottom: "4%", paddingBottom: "4%"}}>
              <div  className="form-group col-sm-12">
                <input style={{marginTop: "4%"}} className="form-control" type="text" name="pokemon2" id="pokemon2" placeholder="Select Pokemon 2" />
                  
                  <br />
                <button className="btn btn-primary" onClick={this.changePokemon2}>Go Pokemon 2</button>
              </div>
              <Poke2 search={this.props.pokemonSearch2.toLowerCase()} />
              <Footer/>
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    pokemonSearch1: state.pokemonSearch1,
    pokemonSearch2: state.pokemonSearch2,
    pokemonData1: state.pokemonData1,
    pokemonData2: state.pokemonData2
  };
};

function mapDispatchToProps(dispatch) {
  return {
    addPokemon1: addPokemon11 => dispatch(addPokemon1(addPokemon11)),
    addPokemon2: addPokemon21 => dispatch(addPokemon2(addPokemon21))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Battle);