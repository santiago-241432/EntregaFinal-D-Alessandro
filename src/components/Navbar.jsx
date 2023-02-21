import Cartwidget from "./Cartwidget";
import { Link, NavLink } from "react-router-dom";
import logo from "./imagenes/LOGO.png";
const NavBar = () =>{
    return(
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to={"/"}><img src={logo} alt={"logo"} /></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <NavLink className="nav-link" activeClassName={"active"} aria-current="page" to={"/category/Grandes"}>Grandes</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" activeClassName={"active"} to={"/category/Medianas"}>Medianas</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" activeClassName={"active"} to={"/category/Pequeñas"}>Pequeñas</NavLink>
                        </li>
                        </ul>
                    </div>
                <div className="col d-flex align-item-center justify-content-end"><Cartwidget /></div>
                </div>

            </nav>
            
        </div>

    );    
}
export default NavBar;