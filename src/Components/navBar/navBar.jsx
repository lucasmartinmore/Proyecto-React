import CarritoDeCompra from '../cardWidget/cardWidget.jsx'
import logoPagina from './logo.png'
import './navBar.css'
import { NavLink, Link } from "react-router-dom";

const BarraNavegacion = () => {
  return (
    //Agregar hreaf a la etiqueta "a" para hacer referencias
    //Antes: li id='item1'> <a> Marvel </a> </li>
    <header>
    <Link to={"/"}>
    <img className='imagenLogoPagina' src={logoPagina} alt="logo"/>
    </Link>
    <div className='MenuLateral'>
    <nav>
        <ul>
        <li id='item1'>
          <NavLink to={`/Categoria/1`}>
            Marvel
          </NavLink>
        </li> 
        <li id='item2'>
        <NavLink to={`/Categoria/2`}>
          Dc Comics
        </NavLink>
        </li>
        <li id='item3'>
        <NavLink to={`/Categoria/3`}>
          Peliculas
        </NavLink>
        </li>
        <li id='item4'>
        <NavLink to={`/Categoria/4`}>
          Disney
        </NavLink>
          </li>
        </ul>
    </nav>
    </div>
    <CarritoDeCompra/>
    </header>
  )
}

export default BarraNavegacion