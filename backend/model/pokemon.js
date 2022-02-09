const sql = require("../db/conexion");

module.exports.save = async (idPokemon) => {
  await sql.query(
    "REPLACE INTO lastpokemon (idPokemon) VALUES (" + idPokemon + ")"
  );
};

module.exports.list = async () => {
  let result = await sql.query(
    "SELECT * FROM lastpokemon ORDER BY time DESC LIMIT 10"
  );
  return result;
};


module.exports.listSome = async (id) => {
  let result = await sql.query(
    "SELECT * FROM lastpokemon WHERE idPokemon = "+ id +" ORDER BY time DESC LIMIT 1"
  );
  return result;
};



