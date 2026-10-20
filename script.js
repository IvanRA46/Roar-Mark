const header = document.querySelector('.site-header');
const navToggle = document.querySelector('.nav-toggle');
const body = document.body;
const contactForm = document.getElementById('contact-form');
const formStatus = document.querySelector('.form-status');

if (header) {
  const handleScroll = () => {
    header.classList.toggle('scrolled', window.scrollY > 18);
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

if (navToggle) {
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    body.classList.toggle('nav-open');
  });

  const navLinks = document.querySelectorAll('.primary-nav a');
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      body.classList.remove('nav-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

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
