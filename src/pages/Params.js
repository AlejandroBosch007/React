import { useParams } from 'react-router-dom';


function Params() {
  const {name} = useParams()
  return (
    <div className="container text-center">
      <h1>¡Hola {name}! </h1>
      <p>¿Cómo estas?</p>
    </div>
  );
}

export { Params };
