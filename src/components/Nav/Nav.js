import './Nav.css';
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../../hooks/useLocalStorage";



function Nav() {
  const [token, saveToken]= useLocalStorage("TOKEN",{})
  const navigate = useNavigate()

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <NavLink className="nav-link" to="/">Home</NavLink>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">Pokemon</NavLink>
          </li>
          <li className="nav-item">  
            <NavLink className="nav-link" to="/quotes">Quotes</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/login">Login</NavLink>
          </li>
        </ul>
        <ul className="navbar-nav" >
          <li className="nav-item" > <a  href="" onClick={()=> {
          saveToken({})
          navigate("/login")
         }}> Log Out</a></li>
        </ul>
      </div>
    </div>
  </nav>
  );
}

export {Nav};