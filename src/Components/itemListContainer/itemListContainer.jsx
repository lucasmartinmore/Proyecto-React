import { useState, useEffect } from 'react';
import ItemList from "../itemList/itemList";
import { useParams } from 'react-router-dom';
import { db } from '../../service/config';
import { collection, getDocs, where, query } from 'firebase/firestore';
import "./itemListContainer.css"

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const { idCategoria } = useParams();

    useEffect(() => {
        const misProductos = idCategoria ? query(collection(db, "productos"), where("idCat", "==", idCategoria)) : collection(db, "productos");

        getDocs(misProductos)
            .then(res => {
                const nuevosProductos = res.docs.map(doc => {
                    const data = doc.data()
                    return { id: doc.id, ...data }
                })
                setProductos(nuevosProductos);
            })
            .catch(error => console.log(error))
    }, [idCategoria])

    return (
        <div>
            <h2 className='sub'>---- P R O D U C T O S ----</h2><br />
            <ItemList productos={productos} />
        </div>
    )
}

export default ItemListContainer
