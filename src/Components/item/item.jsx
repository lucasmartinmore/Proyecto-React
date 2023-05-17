import './item.css'
import BotonProducto from '../productButton/productButton'
import { Link } from "react-router-dom";

const Item = ({ id, nombre, precio, img, stock }) => {
    return (
        <div className='cardProducto'>
            <img className='imgProducto' src={img} alt={nombre} />
            <h2>FUNKO POP!</h2>
            <h3>- {nombre} -</h3>
            <h2><strong>Precio: ${precio}</strong> </h2>
            <p className='stock'>Ultimas {stock} unidades!</p>
            <Link to={`/item/${id}`}><button className='btnProducto'> Ver Detalles </button></Link>
            <BotonProducto></BotonProducto>
        </div>
    )
}

export default Item
