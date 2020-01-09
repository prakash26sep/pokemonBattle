import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import {Card} from 'react-bootstrap';
//import { Col, Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import {Card} from 'react-bootstrap';
//import { Col, Row} from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import axios from 'axios';

import { connect } from "react-redux";

import addPokemonData from '../redux/actions/actions';

var addPokemonData2 = addPokemonData.addPokemonData2;

class Poke2 extends React.Component {

    constructor(props){
        super(props);        
        this.callingPokeApi= this.callingPokeApi.bind(this);

        
        this.state={
            pokemonData2: "",
            search: this.props.search,
            pokemonNotFound: ""
        }
        //this.callingPokeApi();
    }

    //Called only when the first initialised state pokemon is mounted 
    componentDidMount(){
        this.callingPokeApi(this.state.search);
    }

    //Called everytime when the user changes their pokemon
    // componentWillUpdate(){
    //     this.callingPokeApi(this.state.search);
    // }
    
    //Called when the pokemon is changed and the props provided in the parent component is changed
    componentWillReceiveProps (nextProps) {
        this.setState({
            search: nextProps.search
        }, ()=>{
            console.log("comp recieved props " +nextProps.search);
            this.callingPokeApi(this.state.search);
        });
        
      }

    //PokeApi call and also setting up the response in the state as "pokemonData"
    callingPokeApi(search){

        axios.get(`https://pokeapi.co/api/v2/pokemon/${search}/`)
          .then(response => {
              //totalResults= response.data.totalResult;
              this.setState({
                  pokemonData2: response,
                  pokemonNotFound: ""
              }, ()=>{
                  console.log("api called "+this.state.pokemonData2.data.name);
                  this.props.addPokemonData2(
                    this.state.pokemonData2
                  );
                  document.getElementById("pokeLoading2").src= this.state.pokemonData2.data.sprites.front_default;
                  //document.getElementById("cardButton2").innerHTML= "Click to know more";
                  document.getElementById("cardText2").style.display= "inline";
                  document.getElementById("cardButton2").style.display= "inline";
              })
          }).catch((error) => {
              console.log(error);
              this.setState({
                pokemonNotFound: "Pokemon Not Found"
            }, ()=>{
                
                //console.log("api called "+this.state.pokemonData1.data.name);
                console.log("Catch me ghus gaye")
                console.log("catch " +this.state.pokemonNotFound);
                // this.props.addPokemonData1(
                //   this.state.pokemonData1
                // );
                document.getElementById("pokeLoading2").src= "images/pokemonNotFound.png";
                document.getElementById("cardTitle2").innerHTML= "";
                document.getElementById("cardText2").style.display= "none";
                document.getElementById("cardButton2").style.display= "none";
            })
          
          });
    }


    render(){

        //When the data is still loading 
        if (!this.state.pokemonData2.data) {
            return null;
        }
        
        //Putting up response data from state to the pokeData
        let pokeData= this.state.pokemonData2.data;
        //console.log(this.state.pokemonData.data.name)

        return (
            <div style={{display: 'flex', justifyContent: 'space-around', flexDirection: 'row'}}>

                <Card className="" style={{ width: '90%' }}>
                        <Card.Img id="pokeLoading2" variant="top" src="images/loading.gif" />
                        <Card.Body>
                            <Card.Title id="cardTitle2" style={{fontFamily: "monaco", color: "purple", fontSize: "34px"}}>{pokeData.name.charAt(0).toUpperCase() + pokeData.name.slice(1)}</Card.Title>
                            <Card.Text className="card-textt" id="cardText2"><ul style={{listStyleType:"none"}}>{pokeData.abilities.map( abilityy=>

                                <li>{abilityy.ability.name}</li>
                             )}</ul></Card.Text>

                                <br/>
                            <Button id= "cardButton2" variant="warning" href={`https://www.google.com/search?q=${pokeData.name}`} target="_blank">More</Button>
                    </Card.Body>
                </Card>
                <br/><br/>
            </div>
            );
        }
    }

    function mapDispatchToProps(dispatch) {
        return {
          addPokemonData2: addPokemon11 => dispatch(addPokemonData2(addPokemon11))
        };
      }
      
      //export default connect(mapStateToProps, mapDispatchToProps)(App);

      export default connect(null, mapDispatchToProps)(Poke2);