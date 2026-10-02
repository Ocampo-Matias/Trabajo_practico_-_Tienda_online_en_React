import { useState } from 'react'
import '../styles/FormularioCompra.css'

function FormularioCompra({ confirmarCompra, cancelar }) {
  const [datos, setDatos] = useState({
    nombre: '',
    email: '',
    telefono: '',
    direccion: ''
  })

  const handleChange = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    confirmarCompra(datos)
  }

  return (
    <div className="formulario-compra-tarjeta">
      <h3>Datos de entrega y contacto</h3>
      <form onSubmit={handleSubmit} className="formulario-compra">
        <div className="formulario-compra-grid">
          <div className="campo">
            <label>Nombre y Apellido</label>
            <input
              type="text"
              name="nombre"
              required
              value={datos.nombre}
              onChange={handleChange}
              placeholder="Ej: Laura González"
            />
          </div>
          <div className="campo">
            <label>Correo Electrónico</label>
            <input
              type="email"
              name="email"
              required
              value={datos.email}
              onChange={handleChange}
              placeholder="ejemplo@correo.com"
            />
          </div>
          <div className="campo">
            <label>Teléfono</label>
            <input
              type="tel"
              name="telefono"
              required
              value={datos.telefono}
              onChange={handleChange}
              placeholder="Ej: 11 4455 6677"
            />
          </div>
          <div className="campo">
            <label>Dirección de entrega</label>
            <input
              type="text"
              name="direccion"
              required
              value={datos.direccion}
              onChange={handleChange}
              placeholder="Ej: Av. Belgrano 1234, CABA"
            />
          </div>
        </div>

        <div className="formulario-acciones">
          <button type="button" className="boton-cancelar" onClick={cancelar}>
            Volver
          </button>
          <button type="submit" className="boton-confirmar">
            Confirmar pedido
          </button>
        </div>
      </form>
    </div>
  )
}

export default FormularioCompra
