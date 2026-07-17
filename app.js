/**
 * Amunt i Avall - Logica d'interacció de la pàgina web
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Canvi d'estil del Header en fer Scroll
    const header = document.querySelector('.header');
    const handleScroll = () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Executar per defecte per si es recarrega a meitat pàgina

    // 2. Menú de Navegació Mòbil (Hamburger Menu)
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            // Bloquejar scroll del body quan el menú estigui actiu
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        });

        // Tancar menú en fer clic a un enllaç
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }

    // 3. Activar enllaç de navegació actiu segons l'scroll (Scroll Spy)
    const sections = document.querySelectorAll('section[id]');
    const scrollSpy = () => {
        const scrollY = window.scrollY;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 120; // Ajust per al header fix
            const sectionId = current.getAttribute('id');
            const navLink = document.querySelector(`.nav-menu a[href*=${sectionId}]`);

            if (navLink) {
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    navLinks.forEach(link => link.classList.remove('active'));
                    navLink.classList.add('active');
                } else {
                    navLink.classList.remove('active');
                }
            }
        });
    };
    window.addEventListener('scroll', scrollSpy);

    // 4. Animació d'entrada en fer scroll (Intersection Observer)
    const fadeElements = document.querySelectorAll('.feature-badge, .panel, .contact-card, .quote-form-container, .security-banner');
    
    // Configurar els estils inicials per Javascript perquè funcioni correctament com a millora progressiva
    fadeElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
    });

    const observerOptions = {
        root: null,
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const revealOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target); // Deixar d'observar un cop animat
            }
        });
    }, observerOptions);

    fadeElements.forEach(el => {
        revealOnScroll.observe(el);
    });

    // 5. Personalització del Pujador de Fitxers (File Upload)
    const fileInput = document.querySelector('.file-upload-input');
    const fileNameDisplay = document.querySelector('.file-upload-name');
    const uploadTriggerText = document.querySelector('.file-upload-trigger span');

    if (fileInput) {
        fileInput.addEventListener('change', (e) => {
            const files = e.target.files;
            if (files.length > 0) {
                const name = files[0].name;
                fileNameDisplay.textContent = `Fitxer seleccionat: ${name}`;
                fileNameDisplay.style.display = 'block';
                uploadTriggerText.textContent = "Canviar imatge";
            } else {
                fileNameDisplay.style.display = 'none';
                uploadTriggerText.textContent = "Adjuntar foto de la façana / teulada";
            }
        });
    }

    // 6. Enviament interactiu del Formulari de Pressupost
    const quoteForm = document.getElementById('quote-form');
    const formSuccess = document.querySelector('.form-success');

    if (quoteForm && formSuccess) {
        quoteForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Simulació d'enviament (spin/delay per a més realisme premium)
            const submitBtn = quoteForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.disabled = true;
            submitBtn.innerHTML = `
                <svg width="20" height="20" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" stroke="#fff" style="animation: rotate 1s linear infinite;">
                    <g fill="none" fill-rule="evenodd">
                        <g transform="translate(1 1)" stroke-width="2">
                            <circle stroke-opacity=".5" cx="18" cy="18" r="18"/>
                            <path d="M36 18c0-9.94-8.06-18-18-18"></path>
                        </g>
                    </g>
                </svg>
                Enviant dades...
            `;

            // Obtenir dades del formulari
            const formData = {
                nom: document.getElementById('name').value,
                telefon: document.getElementById('phone').value,
                email: document.getElementById('email').value,
                servei: document.getElementById('service-type').value,
                descripcio: document.getElementById('description').value,
                data: new Date().toLocaleString()
            };

            setTimeout(() => {
                // Desa les dades localment com a simulació de base de dades
                let solicitudes = JSON.parse(localStorage.getItem('pressupostos') || '[]');
                solicitudes.push(formData);
                localStorage.setItem('pressupostos', JSON.stringify(solicitudes));

                // Amagar formulari amb transició
                quoteForm.style.transition = 'opacity 0.4s ease';
                quoteForm.style.opacity = '0';
                
                setTimeout(() => {
                    quoteForm.style.display = 'none';
                    formSuccess.style.display = 'block';
                    
                    // Activar focus al missatge de gràcies per accessibilitat
                    formSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }, 400);

            }, 1800); // 1.8 segons de delay per a l'animació de càrrega
        });
    }
});
