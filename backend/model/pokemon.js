const sql = require("../db/conexion")

module.exports.save = async (idPokemon) => {
    await sql.query('INSERT INTO lastpokemon (idPokemon) VALUES ('+idPokemon+')')
}