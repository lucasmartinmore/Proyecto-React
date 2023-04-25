import './CarritoDeCompra.css'
import imagenCarrito from './CarritoPng.png'

const CarritoDeCompra = () => {
    return (
    <div>
        <img className='ImagenCarritoDeCompra' src={imagenCarrito} alt="Carrito"/>
        <strong>3</strong>
    </div>
)
}

export default CarritoDeCompra