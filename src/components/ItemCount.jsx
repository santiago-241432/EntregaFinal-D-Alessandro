import { useState, useEffect } from "react";

const ItemCount = ({stock}) =>{

    const [cantidad, setCantidad] = useState(1);
    const [itemStock, setItemStock] = useState(stock);


    const sumar = () => {

        cantidad < itemStock ? setCantidad(cantidad + 1) : setCantidad(cantidad);
    }

    const restar = () => {
        cantidad > 1 ? setCantidad(cantidad - 1) : setCantidad(cantidad);
        
    }

    const onAdd = () => {
        if (itemStock => cantidad) {
            setItemStock(itemStock - cantidad);
            setCantidad(0);
            console.log("AGREGASTE " + cantidad + " PRODUCTOS AL CARRITO");
            
        
        }
    }

    useEffect(() => {
        setItemStock(stock);
    }, [stock]);

    


    return(

        <div className="container">
            <div className="row my-1">
                <div className="col">
                    <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                        <button type="button" onClick={restar} class="btn btn-danger">-</button>
                        <button type="button" >{cantidad}</button> 
                        <button type="button" onClick={sumar} class="btn btn-success">+</button>
                        
                    </div>
                </div>
            </div>
            <div className="row my-1">
                <div className="col">
                    <button type="button" onClick={onAdd}>AGREGAR AL CARRITO</button> 
                </div>
            </div> 
        
                
        </div>
    
    )
    
}

export default ItemCount;