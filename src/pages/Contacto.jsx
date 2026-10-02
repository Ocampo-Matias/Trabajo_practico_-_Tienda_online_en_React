import '../styles/Contacto.css'

function Contacto() {
  return (
    <main className="contacto-pagina container py-5">
      <h1 className="contacto-titulo">Contacto</h1>
      <p className="contacto-subtitulo">
        ¿Tenés alguna consulta o querés consultarnos por un mueble? Comunicate con nosotros por cualquiera de nuestros canales.
      </p>

      <div className="contacto-grid">
        <div className="contacto-info">
          <div className="contacto-item">

            <div>
              <h3>Dirección</h3>
              <p>Francisco Beazley 1611, Matanza, Buenos Aires</p>
            </div>
          </div>

          <div className="contacto-item">

            <div>
              <h3>WhatsApp</h3>
              <p>
                <a
                  href="https://wa.me/5491112345678"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +54 9 11 1234-5678
                </a>
              </p>
            </div>
          </div>

          <div className="contacto-item">

            <div>
              <h3>Email</h3>
              <p>
                <a href="mailto:contacto@lamesasa.com">
                  contacto@lamesasa.com
                </a>
              </p>
            </div>
          </div>

          <div className="contacto-item">
            <div>
              <h3>Horarios de atención</h3>
              <p>Lunes a Viernes: 9:00 a 18:00 hs</p>
            </div>
          </div>
        </div>

        <div className="contacto-mapa">
          <iframe
            title="Ubicación La Mesasa"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d205.02192259664233!2d-58.62805637371374!3d-34.69633188946139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc6dc90c05cd5%3A0x8218515f9aba8044!2sFrancisco%20Beazley%201611%2C%20B1755%20Rafael%20Castillo%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1790951167299!5m2!1ses-419!2sar"
            loading="lazy"
          />
        </div>
      </div>
    </main>
  )
}

export default Contacto
