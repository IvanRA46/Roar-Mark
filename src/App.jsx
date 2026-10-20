import { useEffect, useState } from 'react';
import brandLogo from '../assets/image/logo.png';
import whatsappIcon from '../assets/image/whatsapp.png';
import HomePage from './pages/HomePage';
import TextilPage from './pages/TextilPage';
import AlimentacionPage from './pages/AlimentacionPage';
import PapeleriaPage from './pages/PapeleriaPage';
import ContactoPage from './pages/ContactoPage';

const pageConfig = {
  home: 'home',
  textil: 'textil',
  alimentacion: 'alimentacion',
  papeleria: 'papeleria',
  contacto: 'contacto',
};

function getCurrentPage() {
  if (typeof window === 'undefined') return 'home';
  const hash = window.location.hash.replace(/^#\/?/, '');
  if (!hash) return 'home';
  return pageConfig[hash] ? hash : 'home';
}

export default function App() {
  const [currentPage, setCurrentPage] = useState(getCurrentPage);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  useEffect(() => {
    const header = document.querySelector('.site-header');
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.querySelector('.form-status');

    const handleDocumentClick = (event) => {
      const servicesItem = document.querySelector('.nav-item--services');
      if (servicesItem && !servicesItem.contains(event.target)) {
        setIsServicesOpen(false);
      }
    };

    const handleHashChange = () => {
      setCurrentPage(getCurrentPage());
    };

    if (header) {
      const handleScroll = () => {
        header.classList.toggle('scrolled', window.scrollY > 18);
      };

      handleScroll();
      window.addEventListener('scroll', handleScroll, { passive: true });
    }

    window.addEventListener('hashchange', handleHashChange);
    document.addEventListener('click', handleDocumentClick);

    const handleResize = () => {
      if (window.innerWidth > 960) {
        setIsMobileMenuOpen(false);
        setIsMobileServicesOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    if (contactForm && formStatus) {
      contactForm.addEventListener('submit', (event) => {
        event.preventDefault();

        if (!contactForm.checkValidity()) {
          contactForm.reportValidity();
          return;
        }

        const formData = new FormData(contactForm);
        const nombre = formData.get('nombre')?.toString().trim() || 'Cliente';
        const empresa = formData.get('empresa')?.toString().trim() || 'Sin empresa';
        const correo = formData.get('correo')?.toString().trim() || '';
        const telefono = formData.get('telefono')?.toString().trim() || '';
        const division = formData.get('division')?.toString().trim() || 'General';
        const mensaje = formData.get('mensaje')?.toString().trim() || '';

        const subject = encodeURIComponent(`Cotización ROAR MARK - ${division}`);
        const body = encodeURIComponent(
          `Nombre completo: ${nombre}\n` +
            `Empresa: ${empresa}\n` +
            `Correo: ${correo}\n` +
            `Teléfono: ${telefono}\n` +
            `División de interés: ${division}\n\n` +
            `Mensaje:\n${mensaje}`
        );

        formStatus.textContent = 'Se abrirá su cliente de correo para enviar la cotización.';
        window.location.href = `mailto:roarmarkcomercializadora@gmail.com?subject=${subject}&body=${body}`;
        contactForm.reset();
      });
    }

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      document.removeEventListener('click', handleDocumentClick);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleNavigate = (page) => {
    setIsServicesOpen(false);
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : `#/${page}`;
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'textil':
        return <TextilPage />;
      case 'alimentacion':
        return <AlimentacionPage />;
      case 'papeleria':
        return <PapeleriaPage />;
      case 'contacto':
        return <ContactoPage />;
      default:
        return <HomePage />;
    }
  };

  const navigateTo = (page) => {
    handleNavigate(page);
  };

  return (
    <>
      <header className="site-header">
        <div className="container nav-shell">
          <a href="/" className="brand" aria-label="ROAR MARK S.A. de C.V." onClick={(event) => {
            event.preventDefault();
            navigateTo('home');
          }}>
            <img className="brand-logo" src={brandLogo} alt="ROAR MARK" />
            <span className="brand-text">
              <span className="brand-name">ROAR MARK</span>
              <small>S.A. DE C.V.</small>
            </span>
          </a>

          <button
            className={`nav-toggle ${isMobileMenuOpen ? 'is-open' : ''}`}
            aria-expanded={isMobileMenuOpen}
            aria-controls="primary-nav"
            aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            onClick={() => setIsMobileMenuOpen((open) => !open)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav
            className={`primary-nav ${isMobileMenuOpen ? 'is-open' : ''}`}
            id="primary-nav"
            aria-label="Navegación principal"
          >
            <a href="/" onClick={(event) => {
              event.preventDefault();
              navigateTo('home');
            }}>Inicio</a>

            <div
              className={`nav-item nav-item--services ${isServicesOpen || isMobileServicesOpen ? 'is-open' : ''}`}
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
              onFocusCapture={() => setIsServicesOpen(true)}
              onBlurCapture={(event) => {
                const nextFocus = event.relatedTarget;
                if (!nextFocus || !event.currentTarget.contains(nextFocus)) {
                  setIsServicesOpen(false);
                }
              }}
            >
              <button
                type="button"
                className="nav-dropdown-trigger"
                aria-expanded={isServicesOpen || isMobileServicesOpen}
                aria-haspopup="menu"
                onClick={(event) => {
                  event.preventDefault();
                  if (window.innerWidth <= 960) {
                    setIsMobileServicesOpen((open) => !open);
                  } else {
                    setIsServicesOpen((open) => !open);
                  }
                }}
              >
                Servicios
                <span className="nav-chevron" aria-hidden="true">▾</span>
              </button>

              <div className="nav-dropdown" role="menu" aria-label="Submenú de servicios">
                <a href="#/textil" role="menuitem" onClick={(event) => {
                  event.preventDefault();
                  navigateTo('textil');
                }}>Textil</a>
                <a href="#/alimentacion" role="menuitem" onClick={(event) => {
                  event.preventDefault();
                  navigateTo('alimentacion');
                }}>Alimentación</a>
                <a href="#/papeleria" role="menuitem" onClick={(event) => {
                  event.preventDefault();
                  navigateTo('papeleria');
                }}>Papelería</a>
              </div>
            </div>

            <a href="#/contacto" className="nav-cta" onClick={(event) => {
              event.preventDefault();
              navigateTo('contacto');
            }}>Contacto</a>
          </nav>
        </div>
      </header>

      <main id="top">{renderCurrentPage()}</main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <a href="/" className="brand footer-brand-link" aria-label="ROAR MARK S.A. de C.V." onClick={(event) => {
              event.preventDefault();
              navigateTo('home');
            }}>
              <img className="brand-logo" src={brandLogo} alt="ROAR MARK" />
              <span className="brand-text">
                <span className="brand-name">ROAR MARK</span>
                <small>S.A. DE C.V.</small>
              </span>
            </a>
            <p>Proveeduría y comercialización mayorista en textil, alimentación y papelería.</p>
          </div>

          <div className="footer-column">
            <h3>Divisiones</h3>
            <ul>
              <li><a href="#/textil" onClick={(event) => { event.preventDefault(); navigateTo('textil'); }}>Textil</a></li>
              <li><a href="#/alimentacion" onClick={(event) => { event.preventDefault(); navigateTo('alimentacion'); }}>Alimentación</a></li>
              <li><a href="#/papeleria" onClick={(event) => { event.preventDefault(); navigateTo('papeleria'); }}>Papelería</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Contacto</h3>
            <ul>
              <li><a href="tel:3319106423">33 1910 6423</a></li>
              <li><a href="mailto:roarmarkcomercializadora@gmail.com">roarmarkcomercializadora@gmail.com</a></li>
              <li><a href="#/contacto" onClick={(event) => { event.preventDefault(); navigateTo('contacto'); }}>Solicitar cotización</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Legal</h3>
            <ul>
              <li><a href="aviso-de-privacidad.html">Aviso de privacidad</a></li>
              <li><a href="terminos-comerciales.html">Términos comerciales</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container">
            <p>© 2026 ROAR MARK S.A. de C.V. · Zapopan, Jalisco, México.</p>
          </div>
        </div>
      </footer>

      <a
        className="floating-whatsapp"
        href="https://wa.me/523319106423?text=Hola%20me%20gustar%C3%ADa%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20productos%20y%20cotizaciones."
        target="_blank"
        rel="noreferrer"
        aria-label="Contactar por WhatsApp"
      >
        <img src={whatsappIcon} alt="WhatsApp" />
      </a>
    </>
  );
}
