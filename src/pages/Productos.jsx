import productos from '../data/productos'
import ProductoCard from '../components/ProductoCard'
import '../styles/Productos.css'

function Productos({ carrito, agregarAlCarrito }) {
  return (
    <div className="container pagina-productos">
      <h2 className="productos-titulo">Nuestros Productos</h2>
      <div className="row g-4">
        {productos.map((producto) => {
          const item = carrito.find(produc => produc.id === producto.id)
          const cantidad = item ? item.cantidad : 0
          return (
            <div key={producto.id} className="col-12 col-md-6 col-lg-4">
              <ProductoCard
                producto={producto}
                agregarAlCarrito={agregarAlCarrito}
                cantidadEnCarrito={cantidad}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default Productos