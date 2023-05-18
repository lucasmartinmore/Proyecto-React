import './App.css';
import BarraNavegacion from './Components/navBar/navBar';
import ItemHeader from './Components/itemHeader/itemHeader';
import ItemListContainer from './Components/itemListContainer/itemListContainer';
import ItemDetailContainer from './Components/itemDetailContainer/itemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
      <BarraNavegacion/>
      <ItemHeader greeting="FUNKO WORLD"/>
      <Routes>
      <Route path='/' element={<ItemListContainer/>}/>
      <Route path='/categoria/:idCategoria' element={<ItemListContainer/>}/>
      <Route path='/item/:idItem' element={<ItemDetailContainer/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

