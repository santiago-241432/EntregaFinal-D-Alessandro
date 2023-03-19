import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import Loading from "./Loading";

const ItemListContainer = () => {

    const[items, setItems] = useState([]);
    const[cargando, setCargando] = useState(true);
    const {id} = useParams();

    /*useEffect(() => {
        

        const promesa = new Promise ((resolve) =>{

            setTimeout(() =>{
                resolve( id ? arrayProductos.filter(item => item.categoria === id) : arrayProductos);
            }, 2000);

        });
        promesa.then((respuesta) =>{
            setItems(respuesta);
        });
    },[id]);*/

   /* useEffect(() => { // PARA SUBIR TODOS LOS PRODUCTOS DE MI JSON LOCAL AL FIRESTORE
        
        const db = getFirestore();
        const itemsCollection = collection(db, "items");

        arrayProductos.forEach(item => {
            addDoc(itemsCollection, item);
        });

        console.log("se agregaron los productos!");

    },[]);*/

    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");
        const filter = id ? query(itemsCollection, where("categoria", "==", id)) : itemsCollection;
        getDocs(filter).then(elements => {
            setItems(elements.docs.map(element => ({id:element.id, ...element.data()})));
            setCargando(false);

        });
    
    },[id]);


    return(
        
    cargando ? <Loading /> : <ItemList items={items}/>
        
        
        
        
    )
}
export default ItemListContainer;