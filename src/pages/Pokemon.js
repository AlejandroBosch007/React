
import { GetPokemon } from "../components/GetPokemon/GetPokemon";
import { ListPokemon } from "../components/ListPokemon/ListPokemon";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';


function Pokemon() {
    const [token]= useLocalStorage("TOKEN",{})
    const navigate = useNavigate()
    
    useEffect(()=>{
        if (!token.token) {
            navigate("/login")
          }
    },[])

    return ( 
        <div className='container text-center'>
            <GetPokemon/ >
            <ListPokemon / >
        </div>
     );
}

export {Pokemon};