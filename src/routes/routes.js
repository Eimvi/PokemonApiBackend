// Controllers
const pokemonController = require('../controllers/pokemon.controller')
// Middlewares
const { requestSearchPokemon, requestPokemons, requestPokemon } = require('../middlewares/pokemons')

module.exports = (router) => {

    // Pokemon
    router.get('/pokemons', requestPokemons, pokemonController.getPokemons); //Get All Pokemons
    router.get('/pokemon/:name', requestPokemon, pokemonController.getPokemon); //Get Pokemon for Card Info
    router.get('/pokemonByName/:name', requestSearchPokemon, pokemonController.getPokemonByName); //Get Pokemon to Search
}