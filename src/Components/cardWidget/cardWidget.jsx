import './cardWidget.css'
import imagenCarrito from './cardWidget.png'

const CarritoDeCompra = () => {
    return (
    <div>
        <img className='ImagenCarritoDeCompra' src={imagenCarrito} alt="Carrito"/>
        <strong>3</strong>
    </div>
)
}

export default CarritoDeCompra