const Footer = () =>{
    return(
        <div>
            <ul className="nav justify-content-end bg-light color-light">
                <li className="nav-item">
                    <a className="nav-link" href={"/PoliticaDePrivacidad"}>POLITICA DE PRIVACIDAD</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href={"/DefensaDelConsumidor"}>DEFENSA DEL CONSUMIDOR</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href={"/Contacto"}>CONTACTO</a>
                </li>
            </ul>
        </div>
        
    );

} 

export default Footer;