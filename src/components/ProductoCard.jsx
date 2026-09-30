import { Link } from 'react-router-dom'
import '../styles/ProductoCard.css'

function ProductoCard({ producto, agregarAlCarrito, cantidadEnCarrito = 0 }) {
    const stockDisponible = producto.stock - cantidadEnCarrito
    const sinStock = stockDisponible <= 0

    return (
        <div className="tarjeta-producto">
            <Link to={`/producto/${producto.id}`} className="tarjeta-enlace-imagen">
                <img src={producto.imagen} alt={producto.nombre} className="tarjeta-imagen" />
            </Link>
            <div className="tarjeta-cuerpo">
                <span className="tarjeta-categoria">{producto.categoria}</span>
                <h3 className="tarjeta-titulo">{producto.nombre}</h3>
                <p className="tarjeta-precio">${producto.precio.toLocaleString('es-AR')}</p>
                <p className={`tarjeta-stock ${sinStock ? 'sin-stock' : 'con-stock'}`}>
                    {sinStock ? 'Sin stock' : `${stockDisponible} u. disponibles`}
                </p>
                <div className="tarjeta-botones">
                    <Link to={`/producto/${producto.id}`} className="boton-detalle">
                        Ver detalle
                    </Link>
                    <button
                        className="boton-agregar"
                        onClick={() => agregarAlCarrito(producto.id)}
                        disabled={sinStock}
                    >
                        {sinStock ? 'Agotado' : 'Agregar'}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductoCard
