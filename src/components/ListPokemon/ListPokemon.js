import { useState,useEffect } from 'react';
import {listPokemon} from '../../api/api';

function ListPokemon() {


    const [list, setList] = useState([])

    const newListPokemon = async () => {
         const pokelistBak = await listPokemon()
         let pokeJSON = await pokelistBak.json()
         setList(pokeJSON.list[0])
    }

    useEffect(newListPokemon,[])

    return (
        <div className="card">
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