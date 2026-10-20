import paperHeroVideo from '../../assets/video/paper.mp4'
import schoolVideo from '../../assets/video/school.mp4'
import officeVideo from '../../assets/video/office.mp4'
import suppliesVideo from '../../assets/video/supplies.mp4'
import deskImage from '../../assets/image/desk.jpg'

const categories = [
  {
    title: 'Escolar',
    video: schoolVideo,
    description: 'Cuadernos, lápices y material didáctico.',
  },
  {
    title: 'Oficina',
    video: officeVideo,
    description: 'Tóner, papel bond y accesorios.',
  },
  {
    title: 'Suministro',
    video: suppliesVideo,
    description: 'Soluciones para mantener inventario disponible en cada momento.',
  },
];

const benefits = [
  'Surtido útil para escuelas, oficinas y comercios.',
  'Atención por volumen y necesidad operativa.',
  'Disponibilidad para mantener actividades sin interrupciones.',
];

export default function PapeleriaPage() {
  return (
    <div className="page-section page-section--papeleria" id="papeleria">
      <section className="page-hero page-hero--papeleria">
        <video
          className="page-hero__video"
          src={paperHeroVideo}
          autoPlay
          muted
          loop
          playsInline
        />

        <div className="container page-hero__grid">
          <div className="page-hero__content">
            <p className="page-kicker">Papelería</p>
            <h1>Material de oficina y escolar para operar con orden.</h1>

            <div className="page-hero__actions">
              <a href="#/contacto" className="btn btn-primary">Cotizar materiales</a>
              <a href="#/textil" className="btn btn-secondary">Ver textil</a>
            </div>
          </div>

          <div className="page-hero__panel" aria-label="Resumen de papelería">
          </div>
        </div>
      </section>

      <section className="page-content">
        <div className="container">
          <div className="section-copy">
            <p className="section-tag">Soluciones útiles</p>
            <h2>Soluciones en Papelería</h2>
            <p>
              Abastecemos al sector educativo y corporativo con artículos escolares y consumibles de oficina. Suministros integrales que garantizan la operación diaria.
            </p>
          </div>

          <div className="feature-grid">
            {categories.map((category) => (
              <article key={category.title} className="feature-card feature-card--brand">
                <div className="feature-card__media">
                  <video
                    src={category.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                </div>
                <div className="feature-card__overlay" aria-hidden="true" />
                <div className="feature-card__content">
                  <h3>{category.title}</h3>
                  <p>{category.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-band page-band--papeleria">
        <img className="page-band__video" src={deskImage} alt="" aria-hidden="true" />
        <div className="page-band__overlay" aria-hidden="true" />
        <div className="container page-band__grid page-band__grid--content">
          <div>
            <p className="section-tag section-tag--light">Qué hace la diferencia</p>
            <h2>Organización y disponibilidad para cada espacio de trabajo.</h2>
          </div>
          <ul className="page-band__list">
            {benefits.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
