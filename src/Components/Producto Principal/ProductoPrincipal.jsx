import BotonProducto from '../Boton producto/BotonProducto'
import ImagenProducto from '../Imagen Producto/ImagenProducto'
import InformacionProducto from '../Informacion Producto/InformacionProducto'
import './ProductoPrincipal.css'

const ProductoPrincipal = () => {
  return (
    <div className='productoPrincipal'>
        <ImagenProducto></ImagenProducto>
        <InformacionProducto></InformacionProducto>
        <BotonProducto></BotonProducto>
    </div>
  )
}

export default ProductoPrincipal
