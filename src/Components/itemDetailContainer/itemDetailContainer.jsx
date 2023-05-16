import { useState, useEffect } from 'react';
import { getUnProducto } from '../asyncMocks';
import itemDetail from '../itemDetail/itemDetail';
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
      <itemDetail {...producto} />
    </div>
  )
}

export default ItemDetailContainer