const pokemonModel = require("../model/pokemon");

module.exports.savePokemon = async (idPokemon) => {
  await pokemonModel.save(idPokemon);
};

module.exports.listPokemon = async () => {
  return await pokemonModel.list();
};

module.exports.listSomePokemon = async (id) => {
  return await pokemonModel.listSome(id);
};

module.exports.add = (a, b) => {
  return a + b;
};
module.exports.substract = (a, b) => {
  return a - b;
};
