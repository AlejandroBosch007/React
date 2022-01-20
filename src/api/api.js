const getPokemon = async (idPokemon) =>{
    let pokemon = await fetch('https://pokeapi.co/api/v2/pokemon/'+ idPokemon);
    return pokemon
}

const savePokemon = async (idPokemon) =>{
    return await fetch('http://localhost:3001/savepokemon',{
        method: 'POST',
        body: JSON.stringify({idPokemon}),
        headers:{
            'Content-Type': 'application/json'
        }
    })
    .then(res=>res.json())
    .catch(err => console.log(err))
}

const listPokemon = async () =>{
    let list = await fetch('http://localhost:3001/listpokemon');
    return list
}

export {getPokemon,savePokemon,listPokemon};