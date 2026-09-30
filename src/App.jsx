import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Inicio from './pages/Inicio'
import Productos from './pages/Productos'
import DetalleProducto from './pages/DetalleProducto'
import Carrito from './pages/Carrito'
import Contacto from './pages/Contacto'
import productos from './data/productos'
import './styles/App.css'

function App() {
  const [carrito, setCarrito] = useState([])

  const cantidadCarrito = carrito.reduce((total, item) => total + item.cantidad, 0)

  const agregarAlCarrito = (id) => {
    const producto = productos.find((p) => p.id === id)
    if (!producto) return false

    const itemEnCarrito = carrito.find((item) => item.id === id)
    const cantidadActual = itemEnCarrito ? itemEnCarrito.cantidad : 0

    if (cantidadActual >= producto.stock) return false

    setCarrito((prev) =>
      itemEnCarrito
        ? prev.map((item) =>
          item.id === id ? { ...item, cantidad: item.cantidad + 1 } : item
        )
        : [...prev, { ...producto, cantidad: 1 }]
    )
    return true
  }

  return (
    <>
      <Navbar cantidadCarrito={cantidadCarrito} />

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/productos" element={<Productos carrito={carrito} agregarAlCarrito={agregarAlCarrito} />} />
        <Route path="/producto/:id" element={<DetalleProducto carrito={carrito} agregarAlCarrito={agregarAlCarrito} />} />
        <Route path="/carrito" element={<Carrito carrito={carrito} setCarrito={setCarrito} />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
