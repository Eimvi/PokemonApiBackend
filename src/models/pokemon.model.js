const { Schema, set, Types } = require('mongoose')
const pokemonSchema = new Schema(
    {
        pokemon: {
            type: String,
            unique: true,
            required: true,
            lowercase: true
        },
        data1: {
            type: String,
            unique: true,
            required: true,
            lowercase: true
        },
        data2: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
)
module.exports = pokemonSchema
