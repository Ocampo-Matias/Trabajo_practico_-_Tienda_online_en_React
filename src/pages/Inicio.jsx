import { Link } from 'react-router-dom'
import '../styles/Inicio.css'

const categorias = [
  { nombre: 'Mesas', imagen: '/productos/mesa-roma.jpg' },
  { nombre: 'Sillas', imagen: '/productos/silla-madera-clasica.jpg' },
  { nombre: 'Dormitorio', imagen: '/productos/placard-2-puertas.jpg' },
  { nombre: 'Escritorios', imagen: '/productos/escritorio-estudio.jpg' },
  { nombre: 'Living', imagen: '/productos/sillon-individual.jpg' },
  { nombre: 'Guardado', imagen: '/productos/biblioteca-5-estantes.jpg' },
]

function Inicio() {
  return (
    <div className="pagina-inicio">

      <section className="banner">
        <div className="banner-overlay">
          <h1 className="banner-titulo">La Mesasa</h1>
          <p className="banner-descripcion">
            Muebles de madera con identidad. Diseñados para durar, pensados para tu hogar.
          </p>
          <Link to="/productos" className="banner-boton">
            Ver catálogo completo
          </Link>
        </div>
        <img
          src="/productos/mesa-comedor-familiar.jpg"
          alt="Banner La Mesasa"
          className="banner-imagen"
        />
      </section>

      <section className="seccion-categorias container py-5">
        <h2 className="seccion-titulo">Explorá por categoría</h2>
        <div className="categorias-grid">
          {categorias.map((cat) => (
            <Link
              key={cat.nombre}
              to={`/productos?cat=${cat.nombre}`}
              className="categoria-tarjeta"
            >
              <img src={cat.imagen} alt={cat.nombre} className="categoria-imagen" />
              <div className="categoria-nombre">{cat.nombre}</div>
            </Link>
          ))}
        </div>
      </section>

      <section className="seccion-nosotros container py-5">
        <div className="nosotros-contenido">
          <div className="nosotros-texto">
            <h2>¿Quiénes somos?</h2>
            <p>
              La Mesasa es un emprendimiento familiar de muebles a medida, ubicado en Buenos Aires.
              Trabajamos con maderas seleccionadas y melaminas de alta calidad para crear piezas que
              combinan funcionalidad y estética natural.
            </p>
            <p>
              Cada mueble es fabricado con atención al detalle, pensando en que dure muchos años en
              tu hogar.
            </p>
          </div>
          <img
            src="/productos/escritorio-estudio.jpg"
            alt="Nuestro taller"
            className="nosotros-imagen"
          />
        </div>
      </section>

    </div>
  )
}

export default Inicio
