const mongoose = require('mongoose')

const pokemonI = require ('../models/pokemon.model')

pokemonI.statics = {
  create: function (data, cb) {
    const pokemon = new this(data)
    pokemon.save(cb)
  }
}
const pokemonModel = mongoose.model('pokemons', pokemonI)
module.exports  = pokemonModel
  