import { useState, useEffect } from 'react';
import { getProductos, getProductosPorCategoria } from '../asyncMocks';
import ItemList from "../itemList/itemList";
import {useParams} from 'react-router-dom';
import "./itemListContainer.css"

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const {idCategoria} = useParams();

    useEffect(() => {
        const funcionProductos = idCategoria ? getProductosPorCategoria : getProductos;

        funcionProductos(idCategoria)
            .then(res => setProductos(res))
            .catch(error => console.error(error))
    }, [idCategoria])



    return (
        <div>
            <br /><h1>-------- PRODUCTOS --------</h1><br />
            <ItemList productos={productos}/>
        </div>
    )
}

export default ItemListContainer
