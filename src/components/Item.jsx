import { Link } from "react-router-dom";

const Item = ({item}) =>{
    
    return(
        <Link to={"/item/" + item.index} className="text-decoration-none text-dark">
        <div classname="card">
            <img src={item.imagen} classname="card-img-top" alt={item.nombre} />
            <div classname="card-body">
                <h5 classname="card-title">{item.nombre}</h5>
                
            </div>
        </div>
        </Link>
    )
}
export default Item;