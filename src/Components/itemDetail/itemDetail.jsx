import './itemDetail.css'
import ItemCount from '../itemCount/itemCount';
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CarritoContext } from '../context/carritoContext'
import { useContext } from 'react';

const ItemDetail = ({ id, nombre, precio, img, stock }) => {
  const [agregarCantidad, setAgregarCantidad] = useState(0);
  const { agregarProducto } = useContext(CarritoContext);

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
    const item = { id, nombre, precio };
    agregarProducto(item, cantidad);

  }

  return (
    <div className='contenedorItem'>
      <h1>FUNKO POP! {nombre}</h1>
      <p>____________________________________________________________________________________________________________________</p>
      <h2>Precio: ${precio},00 </h2>
      <h3>Producto N°: {id} </h3>
      <h4><strong>Ultimas {stock} unidades en stock !</strong></h4>
      <p>____________________________________________________________________________________________________________________</p>
      <p><strong>NUEVO EN CAJA CERRADA - IMPORTADO DE EE.UU</strong></p>
      <p>__________________________________________________________</p>
      <img src={img} alt={nombre} />
      {
        agregarCantidad > 0 ? (<Link className='miBtn' to="/cart"> Terminar Compra </Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />)
      }
      {
        <Link className='miBtn' to="/"> Seguir Comprando </Link>
      }

    </div>
  )
}

export default ItemDetail