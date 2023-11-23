import { Link } from "react-router-dom";
import { NavS } from "../../pages/style";

const NavP = () => {
  return (
    <>
      <NavS className="navbar fixed-top">
        <div className="container-fluid">
          <a about="logo" href="#">
            MBO
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasDarkNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end text-bg-dark"
            tabindex="-1"
            id="offcanvasDarkNavbar"
            aria-labelledby="offcanvasDarkNavbarLabel"
          >
            <div className="offcanvas-header">
              <h3 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
                Menu
              </h3>
              <button
                type="button"
                className="btn-close btn-close-black"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <Link to={"/home"} className="nav-link">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/pedido"} className="nav-link">
                    Pedidos
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/catalogo"} className="nav-link">
                    Catalogo
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/dashboard"} className="nav-link">
                    Dashboard
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/cliente"} className="nav-link">
                    Clientes
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/"} className="nav-link">
                    Sair
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </NavS>
    </>
  );
};

export default NavP;
