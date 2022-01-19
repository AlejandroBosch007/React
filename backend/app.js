const express = require("express")
const cors = require("cors")
const app = express()

app.use(express.json())
app.use(cors())

function serverStart() {
    app.listen(3001,()=>{
        console.log("Server start on http:localhost:3001")
    })
}

serverStart()


app.post("/savepokemon", (req,res) =>{
    res.send({ok:"OK desde el back"})
})