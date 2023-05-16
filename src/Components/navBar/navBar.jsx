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
          <NavLink to={`/Categoria/Marvel`}>
            <a>Marvel</a>
          </NavLink>
        </li> 
        <li id='item2'>
        <NavLink to={`/Categoria/DC Comics`}>
          <a>Dc Comics</a>
        </NavLink>
        </li>
        <li id='item3'>
        <NavLink to={`/Categoria/Peliculas`}>
          <a>Peliculas</a>
        </NavLink>
        </li>
        <li id='item4'>
        <NavLink to={`/Categoria/Disney`}>
          <a>Disney</a>
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