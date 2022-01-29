import "./Nav.css";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../../hooks/useLocalStorage";

function Nav() {
  const [token, saveToken] = useLocalStorage("TOKEN", {});
  const navigate = useNavigate();

  const logout = () => {
    navigate("/login");
    saveToken({});
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink className="nav-link brand" to="/">
          <i className="fab fa-react"></i> React
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Pokemon
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/quotes">
                Quotes
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/counter">
                Counter
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/redux">
                Redux
              </NavLink>
            </li>
          </ul>
          <ul className="navbar-nav">
            {!token.token && (
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">
                  Login <i className="fas fa-sign-in-alt"></i>
                </NavLink>
              </li>
            )}
            {token.token && (
              <li className="nav-item">
                <span className="nav-link" onClick={logout}>
                  {" "}
                  Log Out <i className="fas fa-sign-out-alt"></i>{" "}
                </span>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export { Nav };
