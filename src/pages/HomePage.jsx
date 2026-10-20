import heroVideo from '../../assets/video/inicio_roarkmark.mp4';
import fashionVideo from '../../assets/video/fashion.mp4';
import foodVideo from '../../assets/video/food.mp4';
import paperVideo from '../../assets/video/paper.mp4';

const homeCards = [
  {
    title: 'División Textil',
    description: 'Suministro y abastecimiento para retail, moda y consumo masivo con atención comercial enfocada en continuidad.',
    media: fashionVideo,
    href: '#/textil',
  },
  {
    title: 'Alimentación',
    description: 'Productos y soluciones para canales de distribución y abastecimiento con enfoque operativo y confiabilidad.',
    media: foodVideo,
    href: '#/alimentacion',
  },
  {
    title: 'Papelería',
    description: 'Material escolar y de oficina para operar con orden, capacidad y disponibilidad constante.',
    media: paperVideo,
    href: '#/papeleria',
  },
];

export default function HomePage() {
  return (
    <div className="home-page" id="home">
      <section className="home-hero" aria-label="Portada principal de ROARMARK">
        <video
          className="home-hero__video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=80"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>

        <div className="home-hero__overlay" aria-hidden="true" />

        <div className="container home-hero__content">
          <p className="home-hero__eyebrow">ROARMARK</p>
          <h1>Confianza, organización y alcance comercial.</h1>
          <p className="home-hero__lead">
            Comercio al por mayor calidad y servicio, especialistas en comodities.
          </p>

          <div className="home-hero__actions">
            <a href="#/textil" className="btn btn-primary">Conoce nuestros servicios</a>
            <a href="#/contacto" className="btn btn-secondary">Contáctanos</a>
          </div>
        </div>
      </section>

      <section className="home-company" aria-labelledby="empresa-title">
        <div className="container home-company__grid">
          <div className="home-company__copy">
            <p className="section-tag">ROARMARK</p>
            <h2 id="empresa-title">Una empresa enfocada en abastecimiento responsable y atención comercial.</h2>
            <p>
              ROARMARK conecta negocios, retail y canales de distribución con soluciones prácticas, funcionales y alineadas a la operación real del mercado.
            </p>
            <p>
              Nuestro enfoque combina eficiencia, organización y respaldo comercial para apoyar cada etapa del proceso de abastecimiento.
            </p>
          </div>

          <div className="home-company__media" aria-label="Imagen corporativa de Roarmark">
            <img
              src="https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1200&q=80"
              alt="Operación logística y comercial organizada"
            />
          </div>
        </div>
      </section>

      <section className="home-cards" aria-labelledby="servicios-title">
        <div className="container">
          <div className="section-copy section-copy--centered">
            <p className="section-tag">Soluciones</p>
            <h2 id="servicios-title">Diversificación comercial con un enfoque operativo claro.</h2>
          </div>

          <div className="home-cards__grid">
            {homeCards.map((card) => (
              <a key={card.title} href={card.href} className="home-card">
                <div className="home-card__image-wrap">
                  <video
                    src={card.media}
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                </div>
                <div className="home-card__body">
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                  <span className="home-card__cta">Ver más</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
