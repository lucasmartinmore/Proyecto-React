import CarritoDeCompra from '../CarritoDeCompra/CarritoDeCompra'
import './BarraNavegacion.css'

const BarraNavegacion = () => {
  return (
    <header>
    <h2 style={{color:"black"}}>FUNKO STORE</h2>
    <nav>
        <ul>
        <li>Marvel</li>
        <li>Dc</li>
        <li>Peliculas</li>
        <li>Disney</li>
        </ul>
    </nav>
    <CarritoDeCompra/>
    </header>
  )
}

export default BarraNavegacion