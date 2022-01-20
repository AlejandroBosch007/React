
import { GetPokemon } from "../components/GetPokemon/GetPokemon";
import { ListPokemon } from "../components/ListPokemon/ListPokemon";

function Pokemon() {
    return ( 
        <div className='container text-center'>
            <GetPokemon/ >
            <ListPokemon / >
        </div>
     );
}

export {Pokemon};