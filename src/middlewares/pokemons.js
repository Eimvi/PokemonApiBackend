const axios = require('axios');
const response = require('../../response')
const pokemonsTypes = require('../utils/pokemonstypes')
const filterPokemons = require('../utils/filterPokemons')

const requestPokemons = async (req, res, next) => {
    const {offset, limit, type}  = req.query;
    let url = '';

    if(limit && offset)
        url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
    else
        url = 'https://pokeapi.co/api/v2/pokemon/';

    try{
        const arrApiPokemons = await axios.get(url);
        const arrpt = pokemonsTypes();
        const arrPokemons = arrApiPokemons.data.results.map((item, index) => {
            if(offset)
                index += parseInt(offset);
            return {name: item.name, img:`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`, type: arrpt[index]};
        })

        if(type){
            req.body = arrPokemons.filter(typePokemon => filterPokemons(typePokemon, type))
            next();
        }else{
            req.body = arrPokemons;
            next();
        }

    }catch(error){
        return response.error({
            res,
            status: 500
        })
    }
}

const requestPokemon = async (req, res, next) => {
    const { name }  = req.params;
    let url = `https://pokeapi.co/api/v2/pokemon/${name}`;

    try{
        const arrApiPokemons = await axios.get(url);
        const pokemonFilter = {
            id: arrApiPokemons.data.id,
            base_experience: arrApiPokemons.data.base_experience,
            height: arrApiPokemons.data.height,
            name: arrApiPokemons.data.name,
            sprites: arrApiPokemons.data.sprites.other.home.front_default,
            stats: arrApiPokemons.data.stats,
            types: arrApiPokemons.data.types,
            weight: arrApiPokemons.data.weight
        }
        req.body = pokemonFilter;
        next();
    }catch(error){
        return response.error({
            res,
            status: 404,
            text: 'Not Found'
        })
    }
}

const requestSearchPokemon = async (req, res, next) => {
    const { name }  = req.params;

    let url = `https://pokeapi.co/api/v2/pokemon/${name}`;

    try{
        const arrApiPokemons = await axios.get(url);
        const types = arrApiPokemons.data.types.map( item => item.type )
        const pokemonFilter = {
            name: arrApiPokemons.data.name,
            img: arrApiPokemons.data.sprites.front_default,
            type: { types , id: arrApiPokemons.data.id }
        }
        req.body = [pokemonFilter];
        next();
    }catch(error){
        return response.error({
            res,
            status: 404,
            text: 'Not Found'
        })
    }
}

module.exports = {
    requestSearchPokemon,
    requestPokemons,
    requestPokemon
}
