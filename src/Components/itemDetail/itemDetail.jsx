import './itemDetail.css'

const ItemDetail = ({id, nombre, precio, img, stock}) => {
  return (
    <div className='contenedorItem'>
        <h1>FUNKO POP! {nombre}</h1>
        <p>----------------------</p>
        <h2>Precio: ${precio},00 </h2>
        <h3>Producto N°: {id} </h3>
        <h4><strong>Ultimas {stock} unidades en stock !</strong></h4>
        <p>----------------------</p>
        <p><strong>NUEVO EN CAJA CERRADA - IMPORTADO DE EE.UU</strong></p>
        <p>----------------------</p>
        <img src={img} alt={nombre} />
    </div>
  )
}

export default ItemDetail