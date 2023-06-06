import './cardWidget.css'
import imagenCarrito from './cardWidget.png'
import { useContext } from 'react';
import { CarritoContext } from '../context/carritoContext';
import { Link } from 'react-router-dom';

const CarritoDeCompra = () => {
    const { cantidadTotal } = useContext(CarritoContext);
    return (
        <div>
            <Link style={{ textDecoration: "none" }} to='/cart'>
                <img className='ImagenCarritoDeCompra' src={imagenCarrito} alt="Carrito" />
                {
                    cantidadTotal >= 0 && <strong className='itemsIndicador'> {cantidadTotal} </strong>
                }
            </Link>
        </div>
    )
}

export default CarritoDeCompra