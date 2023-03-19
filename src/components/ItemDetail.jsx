import { useContext } from "react";
import { CartContext } from "./context/CartContext";
import ItemCount from "./ItemCount";

const ItemDetail = ({item}) =>{
    const {addItem} = useContext(CartContext);
    const onAdd = (quantity) => {
        addItem(item, quantity);
    }
    return(
        <div className="container">
            <div className="row">
                <div className="col text-end">
                    <img src={item.imagen} alt={item.nombre} />
                </div>
                <div className="col">
                    <h1>{item.nombre}</h1>
                    <p>{item.descripcion}</p>
                    <ItemCount stock={item.stock} onAdd={onAdd}/>
                    
                </div>
            </div>
        </div>

    )
}
export default ItemDetail;