import { Link } from 'react-router-dom'
import '../styles/CarritoItem.css'

function CarritoItem({ item, actualizarCantidad, eliminarDelCarrito }) {
    const subtotal = item.precio * item.cantidad
    const alcanzoMaximo = item.cantidad >= item.stock
    const esMinimo = item.cantidad <= 1

    return (
        <div className="item-carrito">

            <img src={item.imagen} alt={item.nombre} className="item-imagen" />

            <div className="item-info">
                <Link to={`/producto/${item.id}`} className="item-titulo">
                    {item.nombre}
                </Link>
                <span className="item-precio-unitario">
                    ${item.precio.toLocaleString('es-AR')} c/u
                </span>
            </div>

            <div className="item-cantidad-control">
                <button
                    className="boton-cantidad"
                    onClick={() => actualizarCantidad(item.id, item.cantidad - 1)}
                    disabled={esMinimo}
                >
                    -
                </button>
                <span className="item-cantidad-numero">{item.cantidad}</span>
                <button
                    className="boton-cantidad"
                    onClick={() => actualizarCantidad(item.id, item.cantidad + 1)}
                    disabled={alcanzoMaximo}
                >
                    +
                </button>
            </div>

            <div className="item-subtotal">
                <span>${subtotal.toLocaleString('es-AR')}</span>
            </div>

            <button
                className="boton-eliminar"
                onClick={() => eliminarDelCarrito(item.id)}
                title="Eliminar producto"
            >
                X
            </button>
        </div>
    )
}
export default CarritoItem