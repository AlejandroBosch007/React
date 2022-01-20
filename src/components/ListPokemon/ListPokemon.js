import { useState } from 'react';
import {listPokemon} from '../../api/api';

function ListPokemon() {

    const pokelist = [{idPokemon: 1, date:"2021-01-19"},{idPokemon: 2, date:"2021-01-19"},{idPokemon: 3, date:"2021-01-19"},{idPokemon: 4, date:"2021-01-19"}]

    const [list, setList] = useState(pokelist)

    const newListPokemon = async () => {
         const pokelistBak = await listPokemon()
         let pokeJSON = await pokelistBak.json()
         console.log(  pokeJSON.list[0])
         setList(pokeJSON.list[0])
    }   


    return (
        <div className="card" onLoad={newListPokemon}>
            <div className="card-body">
                <h3>Lista de Pokemones:</h3>
                <table className="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>idPokemon</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                            list.map(pokemon =>(
                            <tr key={pokemon.idPokemon}>
                                <td>{pokemon.idPokemon}</td>
                                <td>{pokemon.date}</td>
                            </tr>
                                ))
                        }   
                    </tbody>
               </table>
         


            </div>
        </div>
     );
}

export {ListPokemon};