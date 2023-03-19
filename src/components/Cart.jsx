import { useContext } from "react";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
    
    const { cart, clear, cartSuma, removeItem, cartTotal } = useContext(CartContext);

    

    if (cartTotal() === 0) {
        return (
            <h1 className="text-center">CARRITO VACIO</h1>
        )
    }

    return (
        <div className="container my-5">
            <div className="row">
                
                <div className="col-md-8">
                    <table className="table">
                        <tr>
                            <td><Link className="btn btn-warning" onClick={() => {clear()}}>VACIAR CARRITO</Link></td>

                        </tr>
                        {
                            cart.map(item =>
                                <tr key={item.index}>
                                    <td width={20}><img src={item.imagen} alt={item.nombre} width={200}></img></td>
                                    <td>{item.nombre}</td>
                                    <td>{item.quantity}</td>
                                    <td>X ${item.precio}</td>
                                    <td>${item.quantity * item.precio}</td>
                                    <td className="text-end"><Link onClick={() => { removeItem(item.index) }} alt={"eliminar producto"} className="btn btn-warning">X</Link></td>
                                </tr>
                            )
                        }
                        <tr>
                            <td>Total a Pagar</td>
                            <td>${cartSuma()}</td>
                            <td><Link to={"/checkout"} className="btn btn-warning">FINALIZAR COMPRA</Link></td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default Cart;