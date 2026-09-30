import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import '../styles/Navbar.css'

function Navbar({ cantidadCarrito = 0 }) {
  const [busqueda, setBusqueda] = useState('')
  const navigate = useNavigate()

  const handleBusqueda = (e) => {
    e.preventDefault()
    const termino = busqueda.trim()
    if (termino) {
      navigate(`/productos?q=${encodeURIComponent(termino)}`)
    } else {
      navigate('/productos')
    }
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-tienda sticky-top">
      <div className="container-fluid px-4">

        <NavLink to="/" className="navbar-brand d-flex align-items-center gap-2">
          <span className="navbar-logo-icono">🪵</span>
          <span className="navbar-logo-texto">MaderArte</span>
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContenido"
        >
          <span className="navbar-toggler-icon-custom">☰</span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContenido">

          <form className="navbar-buscador mx-auto" onSubmit={handleBusqueda}>
            <div className="input-group">
              <input
                type="text"
                className="form-control buscador-input"
                placeholder="Buscar productos..."
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
              />
              <button type="submit" className="btn buscador-btn">

              </button>
            </div>
          </form>

          <ul className="navbar-nav ms-auto align-items-center gap-1">
            <li className="nav-item">
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `nav-link nav-link-tienda${isActive ? ' activo' : ''}`
                }
              >
                Inicio
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/productos"
                className={({ isActive }) =>
                  `nav-link nav-link-tienda${isActive ? ' activo' : ''}`
                }
              >
                Productos
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/contacto"
                className={({ isActive }) =>
                  `nav-link nav-link-tienda${isActive ? ' activo' : ''}`
                }
              >
                Contacto
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/carrito"
                className={({ isActive }) =>
                  `nav-link nav-link-carrito${isActive ? ' activo' : ''}`
                }
              >
                <span className="carrito-icono">🛒</span>
                {cantidadCarrito > 0 && (
                  <span className="carrito-badge">{cantidadCarrito}</span>
                )}
              </NavLink>
            </li>
          </ul>

        </div>
      </div>
    </nav>
  )
}

export default Navbar
