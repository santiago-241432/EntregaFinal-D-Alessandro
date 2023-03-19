import { Link, useParams } from "react-router-dom";

const Thankyou = () =>{

    const {orderID} = useParams();

    return(
        <div className="container">
            <div className="row my-3">
                <div className="col-md-12">
                    {orderID ? <div><h3>GRACIAS POR TU COMPRA</h3><p>Se genero una orden de compra con el ID:<b>{orderID}</b></p></div> : ""}
                    <Link to={"/"}>VOLVER AL INICIO</Link>
                </div>

            </div>

        </div>
    )
}
export default Thankyou;