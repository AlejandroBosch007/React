import { useState } from 'react';
import './Counter.css';

function Counter(props) {

    const [counter, setCounter] = useState(0)
    const [title, setTitle] = useState("Contador")

    const add = () =>{
        setCounter(counter + 1)
    }

    const substract = () =>{
        setCounter(counter - 1)
    }

    const reset = () =>{
        setCounter(0)
    }

    const write = (event) =>{
        setTitle(event.target.value)
    }

    const isEven = counter % 2 === 0
    const message = isEven ? "Is Even" : "Is Odd"


  return (
      <div className='container text-center'>
          <br />
        <div className='card'>
            <div className='card-body'>
                <h3>{title}</h3>
                <h3>{counter}</h3>
                <h4>{message}</h4>
                <br />
                <div className='row'>
                    <div className='col-sm-4'>
                        <button className='btn btn-primary' onClick={add}> <i className="fas fa-plus-circle"></i> Agregar</button>
                    </div>
                    <div className='col-sm-4'>
                        <button className='btn btn-primary' onClick={substract}> <i className="fas fa-plus-circle"></i> Restar</button>
                    </div>
                    <div className='col-sm-4'>
                    <button className='btn btn-danger' onClick={reset}> <i className="fas fa-toilet"></i> Reset</button>
                    </div>
               </div>
               <br />
               <input className='form-control' type="text" onChange={write} placeholder='Ingresa el titulo del contador'/>
            </div>
        </div>
    </div>
  );
}

export {Counter};