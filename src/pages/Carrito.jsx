import { Link } from 'react-router-dom'
import CarritoItem from '../components/CarritoItem'
import '../styles/Carrito.css'
import { useState } from 'react'
import FormularioCompra from '../components/FormularioCompra'

function Carrito({ carrito, eliminarDelCarrito, actualizarCantidad, vaciarCarrito }) {
  const totalPrecio = carrito.reduce((total, item) => total + (item.precio * item.cantidad), 0)
  const [mostrarFormulario, setMostrarFormulario] = useState(false)
  const [ordenConfirmada, setOrdenConfirmada] = useState(null)
  const manejarConfirmacion = (datos) => {
    const idOrden = Math.floor(100000 + Math.random() * 900000)
    setOrdenConfirmada({
      id: idOrden,
      nombre: datos.nombre,
      email: datos.email,
      total: totalPrecio
    })
    vaciarCarrito()
  }

  if (ordenConfirmada) {
    return (
      <div className="container py-5 text-center compra-exitosa">
        <h2>Muchas gracias por comprar</h2>
        <p>Número de orden: <strong>#{ordenConfirmada.id}</strong></p>
        <p>Total abonado: <strong>${ordenConfirmada.total.toLocaleString('es-AR')}</strong></p>
        <p>Enviamos el comprobante a: {ordenConfirmada.email}</p>
        <Link to="/productos" className="btn btn-success mt-3">Volver al catálogo</Link>
      </div>
    )
  }
  if (carrito.length === 0) {
    return (
      <div className="container py-5 text-center carrito-vacio">
        <h2>Tu carrito está vacío</h2>
        <p>Parece que todavía no agregaste ningún mueble a tu compra.</p>
        <Link to="/productos" className="boton-volver-tienda">
          Ver catálogo de muebles
        </Link>
      </div>
    )
  }
  return (
    <div className="container py-4">
      <h1 className="mb-4">Tu carrito</h1>
      <div className="mb-4">
        {carrito.map((item) => (
          <CarritoItem
            key={item.id}
            item={item}
            actualizarCantidad={actualizarCantidad}
            eliminarDelCarrito={eliminarDelCarrito}
          />
        ))}
        <div className="d-flex justify-content-between mt-3">
          <Link to="/productos" className="enlace-seguir-comprando">
            ← Seguir comprando
          </Link>
          <button className="boton-vaciar" onClick={vaciarCarrito}>
            Vaciar carrito
          </button>
        </div>
      </div>

      <div className="col-12 col-lg-4">
        <div className="tarjeta-resumen">
          <h3>Resumen de compra</h3>
          <div className="resumen-fila-total">
            <span>Total a pagar:</span>
            <strong className="resumen-precio">${totalPrecio.toLocaleString('es-AR')}</strong>
          </div>
          {mostrarFormulario ? (
            <FormularioCompra
              confirmarCompra={manejarConfirmacion}
              cancelar={() => setMostrarFormulario(false)}
            />
          ) : (
            <button className="boton-comprar" onClick={() => setMostrarFormulario(true)}>
              Iniciar compra
            </button>
          )}
        </div>
      </div>
    </div>

  )
}
export default Carrito
