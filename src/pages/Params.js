import { useParams } from 'react-router-dom';


function Params() {
  const {name,lastname} = useParams()
  return (
    <div className="container text-center">
      <h1>Hola {name} {lastname}</h1>
    </div>
  );
}

export { Params };
