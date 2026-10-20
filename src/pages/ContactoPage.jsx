export default function ContactoPage() {
  return (
    <div className="page-section page-section--contacto" id="contacto">
      <section className="page-hero page-hero--contacto">
        <div className="container page-hero__grid">
          <div className="page-hero__content">
            <p className="page-kicker">Contacto</p>
            <h1>Hablemos de tu próximo abastecimiento.</h1>

            <div className="page-hero__actions">
              <a href="mailto:roarmarkcomercializadora@gmail.com" className="btn btn-primary">Enviar correo</a>
              <a href="tel:3319106423" className="btn btn-secondary">Llamar ahora</a>
            </div>
          </div>
        </div>
      </section>

      <section className="page-content">
        <div className="container contact-grid">
          <div className="contact-copy">
            <p className="section-tag">Cotización y atención</p>
            <h2>Estamos listos para ayudarte con tu próxima operación.</h2>
            <p>
              Ya sea que necesites productos textiles, alimentación o material de oficina, te ayudamos a identificar la solución más adecuada para tu negocio.
            </p>

            <div className="contact-points">
              <div className="contact-item">
                <span className="contact-label">Teléfono</span>
                <a href="tel:3319106423">33 1910 6423</a>
              </div>

              <div className="contact-item">
                <span className="contact-label">Correo</span>
                <a href="mailto:roarmarkcomercializadora@gmail.com">roarmarkcomercializadora@gmail.com</a>
              </div>

              <div className="contact-item">
                <span className="contact-label">Domicilio</span>
                <p>Paseo Solares 1174, Col. Solares, C.P. 45019, Zapopan, Jalisco.</p>
              </div>
            </div>
          </div>

          <form className="contact-form" id="contact-form" action="mailto:roarmarkcomercializadora@gmail.com" method="post" encType="text/plain">
            <div className="field-row">
              <label>
                Nombre completo
                <input type="text" name="nombre" placeholder="Tu nombre" required />
              </label>
              <label>
                Empresa
                <input type="text" name="empresa" placeholder="Nombre de la empresa" />
              </label>
            </div>

            <div className="field-row">
              <label>
                Correo electrónico
                <input type="email" name="correo" placeholder="correo@ejemplo.com" required />
              </label>
              <label>
                Teléfono
                <input type="tel" name="telefono" placeholder="(33) 0000 0000" required />
              </label>
            </div>

            <label>
              División de interés
              <select name="division" required>
                <option value="">Selecciona una división</option>
                <option value="Textil">División textil</option>
                <option value="Alimentación y distribución">Alimentación y distribución</option>
                <option value="Papelería">Papelería</option>
                <option value="General">Consulta general</option>
              </select>
            </label>

            <label>
              Mensaje
              <textarea name="mensaje" rows="5" placeholder="¿En qué podemos apoyarte?" required />
            </label>

            <button type="submit" className="btn btn-primary full-width">Solicitar cotización</button>
            <p className="form-status" aria-live="polite"></p>
          </form>
        </div>
      </section>
    </div>
  );
}
