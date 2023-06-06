import './item.css'
import { Link } from "react-router-dom";

const Item = ({ id, nombre, precio, img, stock }) => {
    return (
        <div className='cardProducto'>
            <img className='imgProducto' src={img} alt={nombre} />
            <h3>FUNKO POP!<br/>{nombre}</h3>
            <h2>Precio: <strong>${precio}</strong> </h2>
            <p className='stock'>Ultimas {stock} unidades!</p>
            <Link to={`/item/${id}`}><button className='btnProducto'> Comprar </button></Link>
        </div>
    )
}

export default Item
