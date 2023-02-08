import Cartwidget from "./Cartwidget";
import logo from "./imagenes/LOGO.png";
const NavBar = () =>{
    return(
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <a className="navbar-brand" href={"/"}><img src={logo} alt={"logo"} /></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href={"/Hamburguesas"}>Hamburguesas</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href={"/Bebidas"}>Bebidas</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href={"/Carrito"}>Postres</a>
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