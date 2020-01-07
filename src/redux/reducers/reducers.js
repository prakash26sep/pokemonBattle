//import { ADD_ARTICLE } from "../constants/action-types";


const initialState = {
    pokemonData1: "",
    pokemonData2: "",
    pokemonSearch1: "onix",
    pokemonSearch2: "charizard"  
};

function rootReducer(state = initialState, action) {
    
    if (action.type === "ADD_POKEMON1") {
        return Object.assign({}, state, {
            pokemonSearch1: action.payload
          });
      }

    if (action.type === "ADD_POKEMON2") {
        return Object.assign({}, state, {
            pokemonSearch2: action.payload
          });
      }

      if (action.type === "ADD_POKEMONDATA1") {
        return Object.assign({}, state, {
            pokemonData1: action.payload
          });
      }

      if (action.type === "ADD_POKEMONDATA2") {
        return Object.assign({}, state, {
            pokemonData2: action.payload
          });
      }
    
    return state;
};

export default rootReducer;