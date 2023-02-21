import ItemCount from "./ItemCount";

const ItemDetail = ({item}) =>{
    return(
        <div className="container">
            <div className="row">
                <div className="col text-end">
                    <img src={item.imagen} alt={item.nombre} />
                </div>
                <div className="col">
                    <h1>{item.nombre}</h1>
                    <p>{item.descripcion}</p>
                    <ItemCount stock={item.stock} />
                    
                </div>
            </div>
        </div>

    )
}
export default ItemDetail;