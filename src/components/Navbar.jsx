import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import '../styles/Navbar.css'

function Navbar({ cantidadCarrito = 0 }) {
  const [busqueda, setBusqueda] = useState('')
  const [menuAbierto, setMenuAbierto] = useState(false)
  const navigate = useNavigate()

  const handleBusqueda = (e) => {
    e.preventDefault()
    const termino = busqueda.trim()
    setMenuAbierto(false)
    if (termino) {
      navigate(`/productos?q=${encodeURIComponent(termino)}`)
    } else {
      navigate('/productos')
    }
  }

  const cerrarMenu = () => setMenuAbierto(false)

  return (
    <nav className="navbar navbar-expand-lg navbar-tienda sticky-top">
      <div className="container-fluid px-4">

        <NavLink to="/" className="navbar-brand d-flex align-items-center gap-2" onClick={cerrarMenu}>
          <img src="/la-mesasa-icono.png" alt="La Mesasa" className="navbar-logo-img" />
          <span className="navbar-logo-texto">La Mesasa</span>
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setMenuAbierto((prev) => !prev)}
          aria-expanded={menuAbierto}
          aria-label="Abrir menú de navegación"
        >
          <span className="navbar-toggler-icon-custom">☰</span>
        </button>

        <div className={`collapse navbar-collapse ${menuAbierto ? 'show' : ''}`} id="navbarContenido">

          <form className="navbar-buscador mx-auto" onSubmit={handleBusqueda}>
            <div className="input-group">
              <input
                type="text"
                className="form-control buscador-input"
                placeholder="Buscar productos..."
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
              />
              <button type="submit" className="btn buscador-btn" aria-label="Buscar">
              </button>
            </div>
          </form>

          <ul className="navbar-nav ms-auto align-items-center gap-1">
            <li className="nav-item">
              <NavLink
                to="/"
                end
                onClick={cerrarMenu}
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
                onClick={cerrarMenu}
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
                onClick={cerrarMenu}
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
                onClick={cerrarMenu}
                className={({ isActive }) =>
                  `nav-link nav-link-carrito${isActive ? ' activo' : ''}`
                }
              >
                <img src="/icono-carrito.jpg" alt="Carrito" className="carrito-img-icono" />
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
