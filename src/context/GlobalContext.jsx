import { createContext,useState} from "react";
const GlobalContext = createContext();

const GlobalProvider = ({children}) =>{
    const  [sesion, setSesion] = useState({})

    const strings = {
        name: "React",
        quotesDB: [
            {
                id: 1,
                author:"Nemesis",
                quote:"STARS"
            },
            {
                id: 2,
                author:"Pikachu",
                quote:"Pika"
            },
            {
                id: 3,
                author:"Groot",
                quote:"I am Groot"
            },
            {
                id: 4,
                author:"Hodor",
                quote:"Hodor"
            }
        
        ]
      
        
      }
return(
    <GlobalContext.Provider value={ {sesion ,setSesion,strings}}>
    {children}
    </GlobalContext.Provider>)


}




export {GlobalContext,GlobalProvider}