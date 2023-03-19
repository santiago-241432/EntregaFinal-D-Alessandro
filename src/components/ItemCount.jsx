import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ItemCount = ({stock, onAdd}) =>{

    const [cantidad, setCantidad] = useState(1);
    const [itemStock, setItemStock] = useState(stock);
    const [aggItem, setAggItem] = useState(false);


    const sumar = () => {

        cantidad < itemStock ? setCantidad(cantidad + 1) : setCantidad(cantidad);
    }

    const restar = () => {
        cantidad > 1 ? setCantidad(cantidad - 1) : setCantidad(cantidad);
        
    }

    const addToCart = () => {
        if (itemStock => cantidad) {
            setItemStock(itemStock - cantidad);
            setCantidad(0);
            setAggItem(true);
            onAdd(cantidad);
            
        
        }
    }

    useEffect(() => {
        setItemStock(stock);
    }, [stock]);

    


    return(

        <div className="container">
            <div className="row my-1">
                <div className="col">
                    <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                        <button type="button" onClick={restar} className="btn btn-danger">-</button>
                        <button type="button" >{cantidad}</button> 
                        <button type="button" onClick={sumar} className="btn btn-success">+</button>
                        
                    </div>
                </div>
            </div>
            <div className="row my-1">
                <div className="col">
                    {aggItem ? <Link to={"/cart"} type="button" className="btn btn-danger">TERMINAR MI COMPRA</Link> :
                    <button type="button" onClick={addToCart}>AGREGAR AL CARRITO</button>}
                </div>
            </div> 
        
                
        </div>
    
    )
    
}

export default ItemCount;