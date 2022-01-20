const pokemonModel = require("../model/pokemon")

module.exports.savePokemon = async (idPokemon) =>{
    await pokemonModel.save(idPokemon)
}