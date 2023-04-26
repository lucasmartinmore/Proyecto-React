import CarritoDeCompra from '../CarritoDeCompra/CarritoDeCompra'
import './BarraNavegacion.css'

const BarraNavegacion = () => {
  return (
    //Agregar hreaf a la etiqueta "a" para hacer referencias
    <header>
    <h2 style={{color:"black"}}>FUNKO STORE</h2>
    <div className='MenuLateral'>
    <nav>
        <ul>
        <li id='item1'><a>Marvel</a></li> 
        <li id='item2'><a >Dc</a></li>
        <li id='item3'><a >Peliculas</a></li>
        <li id='item4'><a >Disney</a></li>
        </ul>
    </nav>
    </div>
    <CarritoDeCompra/>
    </header>
  )
}

export default BarraNavegacion