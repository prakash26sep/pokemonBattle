import React from 'react';

import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import App from '../App';
import axios from 'axios';

// import Home from './Home';
// import Battle from './Battle';

// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link
//   } from "react-router-dom";

class Knowmore extends React.Component {
    constructor(props) {
        super(props);

        this.changePokemon= this.changePokemon.bind(this);
    
        this.state = {
            pokemonSearch: "charizard",
            pokemonData: "",
            pokemonNotFound: ""
          }
    }

    callingPokeApi(){
        axios.get(`https://pokeapi.co/api/v2/pokemon/${this.state.pokemonSearch}/`)
          .then(response => {
              //totalResults= response.data.totalResult;
              this.setState({
                  pokemonData: response,
                  pokemonNotFound: ""
              }, ()=>{
                    document.getElementById("abilities").style.display= "inline";
                    document.getElementById("abilities").innerHTML= "";

                    document.getElementById("physical").style.display= "inline";
                    document.getElementById("physical").innerHTML= "";

                    document.getElementById("moves").style.display= "inline";
                    document.getElementById("moves").innerHTML= "";

                    document.getElementById("stats").style.display= "inline";
                    document.getElementById("stats").innerHTML= "";

                    let data= this.state.pokemonData.data;

                    document.getElementById("pokemonImage").src= data.sprites.front_default;
                    document.getElementById("pokemonName").innerHTML= data.name.charAt(0).toUpperCase()+ this.state.pokemonData.data.name.slice(1);

                    //Inserting data values to the Pokemon fields

                    //Setting up Abilities
                    document.getElementById("abilities").innerHTML= "<ul>";
                    data.abilities.map(values=>{
                        document.getElementById("abilities").innerHTML+= "<li>" +values.ability.name +"</li>";
                        return null;
                    });
                    document.getElementById("abilities").innerHTML+= "</ul>";

                   

                    //Setting up Stats
                    document.getElementById("stats").innerHTML= "<ul>";
                    data.stats.map(values=>{
                        document.getElementById("stats").innerHTML+= "<li>" +values.stat.name +": " +values.base_stat +"</li>";
                        return null;
                    });
                    document.getElementById("stats").innerHTML+= "</ul>";


                    //Setting up Physical
                    // eslint-disable-next-line
                    document.getElementById("physical").innerHTML= "<ul>" +"<li>Height: " +data.height +" Inches" +"</li>" +"<li>Weight: " +data.weight +" Pounds" +"</li>"  +"</ul>";


                    //Setting up Moves
                    document.getElementById("moves").innerHTML= "<ul>";
                    for(let i=0;i< 4;i++){
                        document.getElementById("moves").innerHTML+= "<li>" +data.moves[i].move.name +"</li>";
                    }
                    document.getElementById("moves").innerHTML+= "etc</ul>";
                    

              })
          }).catch((error) => {
              console.log(error);
              this.setState({
                pokemonNotFound: "Pokemon Not Found"
            }, ()=>{
                
                document.getElementById("pokemonImage").src= "images/pokemonNotFound.png";
                document.getElementById("pokemonName").innerHTML= "";

                document.getElementById("abilities").style.display= "none";
                document.getElementById("physical").style.display= "none";
                document.getElementById("moves").style.display= "none";
                document.getElementById("stats").style.display= "none";
                

            })
          });
    }

    componentDidMount(){
        //this.callingPokeApi();
        document.getElementById("pokemonImage").src= "images/youChoose.jpg";
    }



    componentWillUpdate(){
        this.callingPokeApi();
    }

    changePokemon(){

        if(document.getElementById("pokemonInput").value === ""){
            alert("Please Enter a Pokemon Name");
        }
        else{
            this.setState({
                pokemonSearch: document.getElementById("pokemonInput").value
            })
        }
    }

    render(){
        return (
            <div>
        
            <div className="container" style={{ display: 'flex', justifyContent: 'center', textAlign: "center", flexDirection: 'column' }}>

            <div>
              <div className="form-group col-sm-12"><br/>
                <input className="form-control" type="text" name="pokemon" id="pokemonInput" placeholder="Select Pokemon 1" />
     
                <br />
                <button onClick={this.changePokemon} className="btn btn-primary btn-dark" >Search Pokemon</button>
              </div>
             
             
                <div className="card-columns" style={{display: 'flex', justifyContent: 'space-around'}}>
                <div style={{float: "left"}}>
                    <div className="card bg-primary">
                        <div className="card-body text-center">
                        <h2 className="card-text">Abilities</h2>
                            <p className="card-text" id="abilities"></p>
                        </div>
                    </div>
                    <div className="card bg-warning">
                        <div className="card-body text-center">
                        <h2 className="card-text">Moves</h2>
                            <p className="card-text" id="moves"></p>
                        </div>
                    </div>
                </div>

                <div style={{display: "flex", flexDirection: "column"}}>
                    <img style={{width:"290px", height:"325px"}} id="pokemonImage" alt=""/>
                    <h3 id="pokemonName" > </h3>
                </div>

                <div style={{float: "right"}}>
                    <div className="card bg-success">
                        <div className="card-body text-center">
                        <h2 className="card-text">Stats</h2>
                            <p className="card-text" id="stats"></p>
                        </div>
                    </div>
                    <div className="card bg-info">
                        <div className="card-body text-center">
                        <h2 className="card-text">Physical</h2>
                            <p className="card-text" id="physical"></p>
                        </div>
                    </div>
                </div>

                </div>
              

            </div>
        </div>

        </div>
            );
        }
    }

export default Knowmore;