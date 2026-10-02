import { useParams, Link } from 'react-router-dom'
import productos from '../data/productos'
import '../styles/DetalleProducto.css'

function DetalleProducto({ carrito, agregarAlCarrito }) {
  const { id } = useParams()
  const producto = productos.find((p) => p.id === Number(id))
  if (!producto) {
    return (
      <div className="container py-5 text-center">
        <h2>Producto no encontrado</h2>
        <Link to="/productos" className="btn btn-outline-secondary mt-3">
          Volver a la tienda
        </Link>
      </div>
    )
  }

  const itemEnCarrito = carrito.find((item) => item.id === producto.id)
  const cantidadEnCarrito = itemEnCarrito ? itemEnCarrito.cantidad : 0
  const stockDisponible = producto.stock - cantidadEnCarrito
  const sinStock = stockDisponible <= 0

  return (
    <div className="container py-4 detalle-contenedor">
      <Link to="/productos" className="detalle-volver">
        ← Volver a productos
      </Link>

      <div className="row g-4 mt-1">
        <div className="col-12 col-md-6">
          <div className="detalle-imagen-contenedor">
            <img src={producto.imagen} alt={producto.nombre} className="detalle-imagen" />
          </div>
        </div>

        <div className="col-12 col-md-6 detalle-info">
          <span className="detalle-categoria">{producto.categoria}</span>
          <h1 className="detalle-titulo">{producto.nombre}</h1>
          <p className="detalle-precio">${producto.precio.toLocaleString('es-AR')}</p>

          <p className="detalle-descripcion">{producto.descripcion}</p>

          <div className="detalle-ficha">
            <h4>Especificaciones</h4>
            <ul>
              <li><strong>Material:</strong> {producto.material}</li>
              <li><strong>Color:</strong> {producto.color}</li>
              <li><strong>Medidas:</strong> {producto.ancho} x {producto.alto} x {producto.profundidad} cm</li>
              <li><strong>Requiere armado:</strong> {producto.requiereArmado ? 'Sí' : 'No'}</li>
            </ul>
          </div>

          <p className={`detalle-stock ${sinStock ? 'sin-stock' : 'con-stock'}`}>
            {sinStock ? 'Sin stock disponible' : `${stockDisponible} unidades disponibles`}
          </p>

          <button
            className="boton-agregar-detalle"
            onClick={() => agregarAlCarrito(producto.id)}
            disabled={sinStock}
          >
            {sinStock ? 'Agotado' : 'Agregar al carrito'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default DetalleProducto
