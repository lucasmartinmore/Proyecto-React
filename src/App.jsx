import './App.css';
import ProductoPrincipal from './Components/Producto Principal/ProductoPrincipal';
import BarraNavegacion from './Components/BarraNavegacion/BarraNavegacion';
import ItemContenedor from './Components/ItemContenedor/ItemContenedor';

function App() {
  return (
    <div className="App">
      <BarraNavegacion/>
      <ItemContenedor greeting="FUNKO STORE"/>
      <ProductoPrincipal/>
    </div>
  );
}

export default App;

