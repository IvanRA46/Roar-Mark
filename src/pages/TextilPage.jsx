import fashionHeroVideo from '../../assets/video/fashion.mp4'
import shirtsVideo from '../../assets/video/tshirts.mp4'
import denimVideo from '../../assets/video/denim.mp4'
import urbanVideo from '../../assets/video/urban.mp4'
import mallstoreVideo from '../../assets/video/mallstore.mp4'
import leviLogo from '../../assets/image/levi\'s.png'
import aeropostaleLogo from '../../assets/image/aeropostale.webp'
import liverpoolLogo from '../../assets/image/liverpool.png'

const featureCards = [
  {
    title: 'Levi\'s',
    logo: leviLogo,
    video: denimVideo,
    description: '',
  },
  {
    title: 'Aéropostale',
    logo: aeropostaleLogo,
    video: urbanVideo,
    description: '',
  },
  {
    title: 'Liverpool',
    logo: liverpoolLogo,
    video: mallstoreVideo,
    description: 'SOCIO OFICIAL DE LIVERPOOL',
  },
];

const processSteps = [
  'Diagnóstico del tipo de operación y necesidad comercial.',
  'Selección de productos, volúmenes y calendario de entrega.',
  'Coordinación de abastecimiento y seguimiento de cumplimiento.',
];

export default function TextilPage() {
  return (
    <div className="page-section page-section--textil" id="textil">
      <section className="page-hero page-hero--textil">
        <video
          className="page-hero__video"
          src={fashionHeroVideo}
          autoPlay
          muted
          loop
          playsInline
        />

        <div className="container page-hero__grid">
          <div className="page-hero__content">
            <p className="page-kicker">División textil</p>
            <h1>Indumentaria y retail con estrategia comercial clara.</h1>

            <div className="page-hero__actions">
              <a href="#/contacto" className="btn btn-primary">Solicitar cotización</a>
              <a href="#/alimentacion" className="btn btn-secondary">Ver alimentación</a>
            </div>
          </div>

          <div className="page-hero__panel" aria-label="Resumen de la división textil">
          </div>
        </div>
      </section>

      <section className="page-content">
        <div className="container">
          <div className="section-copy">
            <p className="section-tag">Qué ofrecemos</p>
            <h2>División Textil: Socio de Liverpool</h2>
            <p>
              Gestionamos el suministro y distribución de indumentaria para las cadenas más importantes del país. Especialistas en playeras de marcas globales como Levi's y Aeropostale.
            </p>
          </div>

          <div className="feature-grid">
            {featureCards.map((card) => (
              <article key={card.title} className="feature-card feature-card--brand">
                <div className="feature-card__media">
                  <video
                    src={card.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                </div>
                <div className="feature-card__content">
                  <img className="feature-card__logo" src={card.logo} alt={card.title} />
                  {card.description ? <p>{card.description}</p> : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-band page-band--textil">
        <video
          className="page-band__video"
          src={shirtsVideo}
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="page-band__overlay" aria-hidden="true" />
        <div className="container page-band__grid page-band__grid--content">
          <div>
            <p className="section-tag section-tag--light">Enfoque operativo</p>
            <h2>Más que ventas: continuidad comercial y atención cercana.</h2>
          </div>
          <ul className="page-band__list">
            <li>Selección orientada a la temporada y demanda del mercado.</li>
            <li>Atención a nuevos proyectos, puntos de venta y líneas de moda.</li>
            <li>Coordinación para mantener inventario útil y abastecimiento estable.</li>
          </ul>
        </div>
      </section>

      <section className="page-content page-content--muted">
        <div className="container">
          <div className="section-copy section-copy--centered">
            <p className="section-tag">Cómo trabajamos</p>
            <h2>Proceso simple y eficaz para cada operación.</h2>
          </div>

          <div className="step-grid">
            {processSteps.map((step, index) => (
              <article key={step} className="step-card">
                <span className="step-card__number">0{index + 1}</span>
                <p>{step}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
