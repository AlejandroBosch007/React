const sql = require("../db/conexion")

module.exports.save = async (idPokemon) => {
    await sql.query('REPLACE INTO lastpokemon (idPokemon) VALUES ('+idPokemon+')')
}