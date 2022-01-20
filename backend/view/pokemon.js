const pokemonController = require("../controller/pokemon")

module.exports = (app) => {
    app.post("/savepokemon", (req,res) =>{
        pokemonController.savePokemon(req.body.idPokemon)
        res.send({ok:"OK desde el back",idPokemon: req.body.idPokemon})
    })
    app.get("/listpokemon", async (req,res) =>{
        const list = await pokemonController.listPokemon()
        res.send({list})
    })
}