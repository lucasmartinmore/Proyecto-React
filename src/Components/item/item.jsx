import './item.css'
import BotonProducto from '../productButton/productButton'
import { Link } from "react-router-dom";

const Item = ({ id, nombre, precio, img, stock }) => {
    return (
        <div className='cardProducto'>
            <img className='imgProducto' src={img} alt={nombre} />
            <h2>FUNKO POP!</h2>
            <h3>{nombre}</h3>
            -------------------------------
            <p className='pie'>Nuevo en caja cerrada - Importado de EEUU</p>
            -------------------------------
            <h2><strong>Precio: ${precio}</strong> </h2>
            <p className='stock'>Ultimas {stock} unidades!</p>
            <button className='btnProducto'> Ver Detalles </button>
            <Link to={`/item/${id}`}><BotonProducto></BotonProducto></Link>
        </div>
    )
}

export default Item
