import './App.css';
import BarraNavegacion from './Components/navBar/navBar';
import ItemHeader from './Components/itemHeader/itemHeader';
import ItemListContainer from './Components/itemListContainer/itemListContainer';
import ItemDetailContainer from './Components/itemDetailContainer/itemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CarritoProvider } from '../src/Components/context/carritoContext';
import Cart from '../src/Components/cart/cart'
import Checkout from '../src/Components/checkout/checkout';

function App() {
  return (
    <>
      <BrowserRouter>
        <CarritoProvider>
          <BarraNavegacion />
          <ItemHeader greeting="F U N  K O - W O R L D" />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/categoria/:idCategoria' element={<ItemListContainer />} />
            <Route path='/item/:idItem' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='*' element={<h1>Error 404 - Sitio en construcción</h1>} />
          </Routes>
        </CarritoProvider>
      </BrowserRouter>
    </>
  );
}

export default App;

