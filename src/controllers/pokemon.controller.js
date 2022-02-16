const response = require('../../response')

exports.getPokemons = async (req, res) => {
    return response.success({
        res,
        status: 200,
        body: {
            pokemons: req.body
        }
    })
}

exports.getPokemon = async (req, res) => {
    return response.success({
        res,
        status: 200,
        body: {
            pokemon: req.body
        }
    })
}

exports.getPokemonByName = async (req, res) => {
    return response.success({
        res,
        status: 200,
        body: {
            pokemons: req.body
        }
    })
}

