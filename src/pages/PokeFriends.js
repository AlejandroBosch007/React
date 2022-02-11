import { deposit, withdraw, reset } from "../redux/actions/bank";
import { connect } from "react-redux";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { userData } from "../api/api";

const mapStateToProps = (state) => {
  return {
    amount: state.bankReducer.amount,
  };
};

function PokeFriends({ amount, deposit, withdraw, reset }) {
  const [token] = useLocalStorage("TOKEN", {});
  const [user] = useLocalStorage("USER", {});
  const navigate = useNavigate();
  useEffect(() => {
    if (!token.token) {
      navigate("/login");
    }
  }, []);

  const getData = async () => {
    let payload = {
      email: user.email,
    };
    return await userData(payload, token);
  };

  useEffect(async () => {
    let data = await getData();
    console.log(data);
  }, []);

  return (
    <div className="container text-left">
      <div className="row">
        <div className="col-lg-4">
          <div className="card">
            <div className="card-body">
              <img src="http://localhost:3001/img/logo.svg" />
              <h2 className="card-title">{user.name}</h2>
              <h4>Ciudad y país de residencia</h4>
              <h4>Edad</h4>
              <h4>Estudios (Universitarios y certificaciones)</h4>
              <ul>
                <li></li>
              </ul>
              <h4>Idiomas</h4>
              <ul>
                <li></li>
              </ul>
              <h4>Perfil de LinkedIn</h4>
              <h4>Hobbies</h4>
              <ul>
                <li></li>
              </ul>
              <h4>Conocimientos extras</h4>
              <ul>
                <li></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-8">
          <div className="card">
            <div className="card-body">
              <p>
                Feedback / recomendaciones: Campo al final del perfil para que
                las empresas partner y los compañeros puedan dejar comentarios
                sobre el perfil.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <p>Amigos</p>
            </div>
            <div className="card-body">
              <p>Buscar Amigos</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default connect(mapStateToProps, { deposit, withdraw, reset })(
  PokeFriends
);
