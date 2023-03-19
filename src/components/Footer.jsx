import { NavLink } from "react-router-dom";

const Footer = () =>{
    return(
        <div>
            <ul className="nav justify-content-end bg-light">
                <li className="nav-item ">
                    <NavLink className="nav-link text-dark" to={"/PoliticaDePrivacidad"}>POLITICA DE PRIVACIDAD</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link text-dark" to={"/DefensaDelConsumidor"}>DEFENSA DEL CONSUMIDOR</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link text-dark" to={"/Contacto"}>CONTACTO</NavLink>
                </li>
            </ul>
        </div>
        
    );

} 

export default Footer;