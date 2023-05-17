import { useState, useEffect } from 'react';
import { getUnProducto } from '../asyncMocks';
import ItemDetail from '../itemDetail/itemDetail';
import { useParams } from 'react-router-dom';


const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null);

  const { idItem } = useParams();

  useEffect(() => {
    getUnProducto(idItem)
      .then(res => setProducto(res));
  }, [idItem])


  return (
    <div>
      <ItemDetail {...producto} />
    </div>
  )
}

export default ItemDetailContainer