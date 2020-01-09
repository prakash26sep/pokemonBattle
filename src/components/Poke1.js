import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import {Card} from 'react-bootstrap';
//import { Col, Row} from 'react-bootstrap';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from 'react-bootstrap';
//import { Col, Row} from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import axios from 'axios';

import { connect } from "react-redux";
import addPokemonData from '../redux/actions/actions';

var addPokemonData1 = addPokemonData.addPokemonData1;

//import { UserConsumer } from '../ContextApiStore/UserContext';



class Poke1 extends React.Component {

    constructor(props){
        super(props);        
        this.callingPokeApi= this.callingPokeApi.bind(this);

        
        this.state={
            pokemonData1: "",
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
        })
        
      }

    //PokeApi call and also setting up the response in the state as "pokemonData"
    callingPokeApi(search){

        axios.get(`https://pokeapi.co/api/v2/pokemon/${search}/`)
          .then(response => {
              //totalResults= response.data.totalResult;
              this.setState({
                  pokemonData1: response,
                  pokemonNotFound: ""
              }, ()=>{
                  console.log("api called "+this.state.pokemonData1.data.name);
                  this.props.addPokemonData1(
                    this.state.pokemonData1
                  );
                  document.getElementById("pokeLoading1").src= this.state.pokemonData1.data.sprites.front_default;
                  document.getElementById("cardButton1").style.display= "inline";
                  document.getElementById("cardText1").style.display= "inline";
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
                document.getElementById("pokeLoading1").src= "images/pokemonNotFound.png";
                document.getElementById("cardTitle1").innerHTML= "";
                document.getElementById("cardText1").style.display= "none";
                document.getElementById("cardButton1").style.display= "none";
                //cardTitle1

            })
          });
    }

    // checkingNotFound(){
    //     console.log("Checking not foundddddd outside");
    //     console.log("" +this.state.pokemonData1);
        
    //     if (this.state.pokemonData1 === "Not Found") {
            
    //         console.log("Checking not foundddddd inside");
    //         return (<h2>Please select a Valid Pokemon</h2>)
    //     }
    // }


    render(){

        //When the data is still loading 
        if (!this.state.pokemonData1.data) {
            return null;
        }
        
        
        
        //Putting up response data from state to the pokeData
        let pokeData= this.state.pokemonData1.data;
        //console.log(this.state.pokemonData.data.name)

        return (

             
                <div style={{display: 'flex', justifyContent: 'space-around', flexDirection: 'row', marginBottom: "20px"}}>

                    <Card className="" style={{ width: '90%' }}>

                            {this.state.pokemonNotFound}
                    
                            {this.props.trainer}
                            <Card.Img className="pokeImg1" variant="top" id="pokeLoading1" src="images/loading.gif" />
                            <Card.Body>
                                <Card.Title id= "cardTitle1" style={{fontFamily: "monaco", color: "purple", fontSize: "34px"}}>{pokeData.name.charAt(0).toUpperCase() + pokeData.name.slice(1)}</Card.Title>
                                <Card.Text className="card-textt" id="cardText1"><ul style={{listStyleType:"none"}}>{pokeData.abilities.map( abilityy=>

                                    <li >{abilityy.ability.name}</li>
                                )}</ul></Card.Text>

                                <br/>
                                <Button id="cardButton1" variant="warning" href={`https://www.google.com/search?q=${pokeData.name}`} target="_blank">More</Button>
                        </Card.Body>
                    </Card>
                    
                </div>
            

            );
        }
    }

    function mapDispatchToProps(dispatch) {
        return {
          addPokemonData1: addPokemon11 => dispatch(addPokemonData1(addPokemon11))
        };
      }
      
      //export default connect(mapStateToProps, mapDispatchToProps)(App);

export default connect(null, mapDispatchToProps)(Poke1);