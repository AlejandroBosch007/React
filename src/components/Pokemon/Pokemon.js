
import { useState } from 'react';
import { getPokemon, savePokemon } from '../../api/api';

import './Pokemon.css';

function Pokemon(props) {

    const [state, setState] = useState({pokemonImage:"",pokemonName:"",pokemonID:false})  

    const printPokemon = async (event) =>{

        let newPokemon =  await getPokemon(event.target.value)
        let pokeJSON = await newPokemon.json()

        let newState = {
            ...state,
            pokemonImage: pokeJSON.sprites.front_default,
            pokemonName: pokeJSON.name,
            pokemonID: event.target.value
        }
        setState(newState)

        console.log(await savePokemon(state.pokemonID))   
    }
 



  return (
<div className='container text-center'>

   <div className='card'>
      <div className='card-body'>
      <h3>Trae un Pokémon:</h3>
         <input className='form-control' type="number" onChange={printPokemon}  placeholder='Ingresa ID del Pokémon'/>
         <br />
         {state.pokemonID > 0 &&
            <>
            <h3>{state.pokemonName}</h3>
            <img className='img-fluid' src={state.pokemonImage} alt='Pokémon' />   
            </>
         } 
         <br />
         </div>
   </div>
</div>
  );
}

export {Pokemon};