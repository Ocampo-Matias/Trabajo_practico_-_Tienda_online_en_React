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
              <p>Defensa 1050, San Telmo, CABA</p>
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
              <p>Sábados: 10:00 a 14:00 hs</p>
            </div>
          </div>
        </div>

        <div className="contacto-mapa">
          <iframe
            title="Ubicación La Mesasa"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.4243684206584!2d-58.37582522434195!3d-34.61870637295058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccb2ddc9b9cb1%3A0x6b87d85c490a6148!2sSan%20Telmo%2C%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1700000000000!5m2!1ses-419!2sar"
            loading="lazy"
          />
        </div>
      </div>
    </main>
  )
}

export default Contacto
