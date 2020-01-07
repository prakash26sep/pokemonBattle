import store from "./store/store";
import addPokemon from "./actions/actions";


//var MyMethods = require('./myModule.js');
var addPokemon1 = addPokemon.addPokemon1;
var addPokemon2 = addPokemon.addPokemon2;


window.store = store;

window.addPokemon1 = addPokemon1;
window.addPokemon2 = addPokemon2;