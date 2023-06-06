import CarritoDeCompra from '../cardWidget/cardWidget.jsx'
import logoPagina from './logo.png'
import './navBar.css'
import { NavLink, Link } from "react-router-dom";

const BarraNavegacion = () => {
  return (
    <header>
      <Link to={"/"}>
        <img className='imagenLogoPagina' src={logoPagina} alt="logo" />
      </Link>
      <div className='MenuLateral'>
        <nav>
          <ul>
            <li id='item1'>
              <NavLink to={`/Categoria/1`}>
                M a r v e l
              </NavLink>
            </li>
            <li id='item2'>
              <NavLink to={`/Categoria/2`}>
                D c  C o m i c s
              </NavLink>
            </li>
            <li id='item3'>
              <NavLink to={`/Categoria/3`}>
                P e l i c u l a s
              </NavLink>
            </li>
            <li id='item4'>
              <NavLink to={`/Categoria/4`}>
                D i s n e y
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <CarritoDeCompra />
    </header>
  )
}

export default BarraNavegacion