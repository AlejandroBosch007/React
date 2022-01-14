
const getPokemon = async (idPokemon) =>{
    let pokemon = await fetch('https://pokeapi.co/api/v2/pokemon/'+ idPokemon);
    return pokemon
}

export {getPokemon};