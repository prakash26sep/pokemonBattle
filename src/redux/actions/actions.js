// src/js/actions/index.js

//import { ADD_ARTICLE } from "../constants/action-types";


exports.addPokemon1 = function addPokemon1(payload) {
  console.log("addPokemon1 call huaaa");
  console.log(payload);
  return { type: "ADD_POKEMON1", payload }
};

exports.addPokemon2 = function addPokemon2(payload) {
  return { type: "ADD_POKEMON2", payload }
};

exports.addPokemonData1 = function addPokemonData1(payload) {
  return { type: "ADD_POKEMONDATA1", payload }
};

exports.addPokemonData2 = function addPokemonData2(payload) {
  return { type: "ADD_POKEMONDATA2", payload }
};