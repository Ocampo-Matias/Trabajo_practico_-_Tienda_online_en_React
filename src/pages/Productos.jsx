import productos from '../data/productos'
import ProductoCard from '../components/ProductoCard'
import '../styles/Productos.css'
import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'


function Productos({ carrito, agregarAlCarrito }) {
  const [searchParams] = useSearchParams()
  const busqueda = searchParams.get('q') || ''
  const categoriaDeInicio = searchParams.get('cat') || ''
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(categoriaDeInicio || 'Todas')

  const categorias = ['Todas', 'Mesas', 'Sillas', 'Living', 'Dormitorio', 'Guardado', 'Escritorios', 'Cocina']

  const productosFiltrados = productos.filter((producto) => {
    const coincideCategoria = categoriaSeleccionada === 'Todas' || producto.categoria === categoriaSeleccionada

    const coincideBusqueda = producto.nombre.toLowerCase().includes(busqueda.toLowerCase())
    return coincideCategoria && coincideBusqueda
  })
  return (
    <div className="container pagina-productos">
      <h2 className="productos-titulo">Nuestros Productos</h2>
      <div className="d-flex flex-wrap justify-content-center gap-2 mb-4">
        {categorias.map((cat) => (
          <button
            key={cat}
            type="button"
            className={`btn ${categoriaSeleccionada === cat ? 'btn-success' : 'btn-outline-secondary'}`}
            onClick={() => setCategoriaSeleccionada(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="row g-4">
        {productosFiltrados.map((producto) => {
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