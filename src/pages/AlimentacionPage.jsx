import foodHeroVideo from '../../assets/video/food.mp4'
import commerceVideo from '../../assets/video/commerce.mp4'
import seedsVideo from '../../assets/video/seeds.mp4'
import convenienceVideo from '../../assets/video/convenience.mp4'
import productsVideo from '../../assets/video/products.mp4'

const categories = [
  {
    title: 'Granos y semillas',
    video: seedsVideo,
    description: 'Comercialización al por mayor de semillas alimenticias, frutos secos y especias de alta calidad. Selección rigurosa para la industria.',
  },
  {
    title: 'Abarrotes',
    video: convenienceVideo,
    description: 'Distribución mayorista de productos de consumo masivo. Red logística optimizada para el abastecimiento oportuno.',
  },
  {
    title: 'Productos de consumo',
    video: productsVideo,
    description: 'Suministro orientado a mantener inventarios confiables y atención comercial atenta.',
  },
];

const benefits = [
  'Rotación y disponibilidad para canales comerciales.',
  'Asesoría según tipo de cliente y volumen requerido.',
  'Atención cercana para abastecimiento y continuidad.',
];

export default function AlimentacionPage() {
  return (
    <div className="page-section page-section--alimentacion" id="alimentacion">
      <section className="page-hero page-hero--alimentacion">
        <video
          className="page-hero__video"
          src={foodHeroVideo}
          autoPlay
          muted
          loop
          playsInline
        />

        <div className="container page-hero__grid">
          <div className="page-hero__content">
            <p className="page-kicker">Alimentación y distribución</p>
            <h1>Surtido sólido para comercios y canales de consumo.</h1>
            <div className="page-hero__actions">
              <a href="#/contacto" className="btn btn-primary">Solicitar catálogo</a>
              <a href="#/papeleria" className="btn btn-secondary">Ver papelería</a>
            </div>
          </div>
        </div>
      </section>

      <section className="page-content">
        <div className="container">
          <div className="section-copy">
            <p className="section-tag">Líneas de negocio</p>
            <h2>Alimentación & Distribución</h2>
            <p>
              Consolidamos operaciones de comercio al por mayor para el sector alimentario nacional con altos estándares de calidad.
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

      <section className="page-band page-band--alimentacion">
        <video
          className="page-band__video"
          src={commerceVideo}
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="page-band__overlay" aria-hidden="true" />
        <div className="container page-band__grid page-band__grid--content">
          <div>
            <p className="section-tag section-tag--light">Lo que valoran nuestras operaciones</p>
            <h2>Disponibilidad y atención que apoyan el crecimiento comercial.</h2>
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
