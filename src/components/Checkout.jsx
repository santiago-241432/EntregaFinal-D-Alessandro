import { useContext, useState } from "react";
import { CartContext } from "./context/CartContext";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { Navigate } from "react-router-dom";

const Checkout = () => {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [orderID, setOrderID] = useState("");
    const { cart, cartSuma, clear } = useContext(CartContext);

    const generarOrden = () => {
        const buyer = { name: nombre, email: email, phone: telefono };
        const fecha = new Date();
        const date = `${fecha.getFullYear()}-${fecha.getMonth() + 1}-${fecha.getDate()} ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`;
        const order = { buyer: buyer, items: {cart}, date: date, total: cartSuma() };

        if(nombre.length === 0){
            return false;
        }

        const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, order).then(data => {
            setOrderID(data.id);
            clear();
            

        });

       

    }



    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-4">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="nombre" className="form-label">Nombre</label>
                            <input type="text" className="form-control" id="nombre" onInput={(e) => { setNombre(e.target.value) }} />
                        </div>

                        <div class="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="text" className="form-control" id="email" onInput={(e) => { setEmail(e.target.value) }} />
                        </div>

                        <div class="mb-3">
                            <label htmlFor="telefono" className="form-label">Telefono</label>
                            <input type="text" className="form-control" id="telefono" onInput={(e) => { setTelefono(e.target.value) }} />
                        </div>


                        <button type="button" className="btn btn-primary" onClick={generarOrden}>GENERAR ORDEN</button>
                    </form>
                </div>
                <div className="col-md-8">
                    <h3 className="text-center">FINALIZA TU COMPRA</h3>
                    <table className="table">
                        
                        {
                            cart.map(item =>
                                <tr key={item.index}>
                                    <td width={20}><img src={item.imagen} alt={item.nombre} width={200}></img></td>
                                    <td>{item.nombre}</td>
                                    <td>{item.quantity}</td>
                                    <td>X ${item.precio}</td>
                                    <td>${item.quantity * item.precio}</td>
                                    
                                </tr>
                            )
                        }
                        <tr className="text-center">
                            <td>Total a Pagar</td>
                            <td>${cartSuma()}</td>
                        </tr>
                    </table>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    {orderID ? <div><h1>GRACIAS POR TU COMPRA</h1><p>se genero una orden de comprar con el ID: {orderID}</p></div> : ""}
                </div>
            </div>
            {orderID ? <Navigate to={"/thankyou/" + orderID} /> : ""}
        </div>
    )
}
export default Checkout;