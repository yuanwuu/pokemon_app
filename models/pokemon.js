// const pokemon = [
//   { name: "bulbasaur", img: "http://img.pokemondb.net/artwork/bulbasaur" },
//   { name: "ivysaur", img: "http://img.pokemondb.net/artwork/ivysaur" },
//   { name: "venusaur", img: "http://img.pokemondb.net/artwork/venusaur" },
//   { name: "charmander", img: "http://img.pokemondb.net/artwork/charmander" },
//   { name: "charizard", img: "http://img.pokemondb.net/artwork/charizard" },
//   { name: "squirtle", img: "http://img.pokemondb.net/artwork/squirtle" },
//   { name: "wartortle", img: "http://img.pokemondb.net/artwork/wartortle" },
// ];

// module.exports = pokemon;


//destructuring the Schema & model
const {Schema, model} = require('mongoose');

// creating a new Schema
const pokemonSchema = new Schema( {
  name: {type: String, requred: true}, 
  image: {type: String, required: true},
  database: Boolean
})

// creating a new model
const Pokemon = model('Pokemon',pokemonSchema);

module.exports = Pokemon
