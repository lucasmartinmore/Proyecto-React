import './itemDetail.css'

const itemDetail = ({id, nombre, precio, img, unidad}) => {
  return (
    <div className='contenedorItem'>
        <h1>FUNKO POP! {nombre}</h1>
        <p>----------------------</p>
        <h2>Precio: {precio} </h2>
        <h3>Producto N°: {id} </h3>
        <h4><strong>Ultimas {unidad} unidades en stock !</strong></h4>
        <p>----------------------</p>
        <p><strong>NUEVO EN CAJA CERRADA - IMPORTADO DE EE.UU</strong></p>
        <p>----------------------</p>
        <img src={img} alt={nombre} />
    </div>
  )
}

export default itemDetail