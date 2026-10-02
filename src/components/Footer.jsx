import { NavLink } from 'react-router-dom'
import '../styles/Footer.css'

function Footer() {
  const anio = new Date().getFullYear()

  return (
    <footer className="footer-tienda">
      <div className="footer-contenido">
        <div className="footer-marca">
          <img src="/la-mesasa-icono.png" alt="La Mesasa" className="footer-logo-img" />
          <span className="footer-logo-texto">La Mesasa</span>
          <p className="footer-descripcion">
            Muebles de calidad para cada rincón de tu hogar.
          </p>
        </div>


        <div className="footer-links">
          <h6 className="footer-titulo-seccion">Navegación</h6>
          <ul>
            <li><NavLink to="/">Inicio</NavLink></li>
            <li><NavLink to="/productos">Productos</NavLink></li>
            <li><NavLink to="/carrito">Carrito</NavLink></li>
            <li><NavLink to="/contacto">Contacto</NavLink></li>
          </ul>
        </div>


        <div className="footer-contacto">
          <h6 className="footer-titulo-seccion">Contacto</h6>
          <ul>
            <li>- contacto@lamesasa.com</li>
            <li>- +54 11 1234-5678</li>
            <li>- Buenos Aires, Argentina</li>
          </ul>
        </div>
      </div>


      <div className="footer-bottom">
        <span>© {anio} La Mesasa — Todos los derechos reservados</span>
      </div>
    </footer>
  )
}

export default Footer
