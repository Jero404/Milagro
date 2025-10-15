/**
* Template Name: Active
* Template URL: https://bootstrapmade.com/active-bootstrap-website-template/
* Updated: Aug 07 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
         // Variables globales
        let selectedImageUrl = null;
        let cardCounter = 0;
        
        // Cargar event listeners cuando el DOM esté listo
        document.addEventListener('DOMContentLoaded', function() {
            // Event listener para la carga de imágenes
            document.getElementById('imageUpload').addEventListener('change', handleImageUpload);
        });
        
        // Manejar la subida de imágenes
        function handleImageUpload(event) {
            const file = event.target.files[0];
            if (!file) return;
            if (!file.type.match('image.*')) {
                alert('Por favor, selecciona solo archivos de imagen.');
                return;
            }
            const reader = new FileReader();
            reader.onload = function(e) {
                selectedImageUrl = e.target.result;
                const preview = document.getElementById('imagePreview');
                preview.src = selectedImageUrl;
                preview.style.display = 'block';
                preview.alt = 'Vista previa de la imagen';
            };
            reader.readAsDataURL(file);
        }
        
        // Generar una nueva card
        function generateCard() {
            const title = document.getElementById('cardTitle').value.trim();
            const text = document.getElementById('cardText').value.trim();
            const image = selectedImageUrl;
            const errorMsg = document.getElementById('formErrorMsg');
            if (!title || !text || !image) {
                errorMsg.textContent = 'Por favor, completa todos los campos y selecciona una imagen.';
                errorMsg.style.display = 'block';
                return;
            } else {
                errorMsg.style.display = 'none';
            }
            // Ocultar estado vacío si existe
            const emptyState = document.querySelector('.empty-state');
            if (emptyState) {
                emptyState.style.display = 'none';
            }
            // Incrementar contador para IDs únicos
            cardCounter++;
            // Crear la card
            createCardElement(selectedImageUrl, title, text, cardCounter);
            // Limpiar el formulario
            resetForm();
        }
        
        // Crear elemento card
        function createCardElement(imageUrl, title, text, id) {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <img src="${imageUrl}" alt="${title}" class="card-image">
                <div class="card-content">
                    <h3 class="card-title">${title}</h3>
                    <button class="boton" onclick="document.getElementById('desc-${id}').classList.toggle('d-none')">Ver descripción</button>
                    <div id="desc-${id}" class="card-desc d-none">
                        ${formatDescription(text)}
                    </div>
                </div>
            `;
            document.getElementById('cardsContainer').appendChild(card);

            // Copiar la card al archivo correspondiente
            const cardHtml = card.outerHTML + '\n';
            if (/bolso|bolsos/i.test(title)) {
                window.copilotWriteToFile && window.copilotWriteToFile('bolsos.html', cardHtml, 'productos-row');
            } else if (/canasta|canastas/i.test(title)) {
                window.copilotWriteToFile && window.copilotWriteToFile('canastas.html', cardHtml, 'productos-row');
            }
        }
        
        // Formatear la descripción (convertir <br> en elementos HTML)
        function formatDescription(text) {
            // Reemplazar <br> con etiquetas HTML reales
            return text.replace(/<br>/g, '<br>');
        }
        
        // Limpiar todas las cards
        function clearAllCards() {
            if (!confirm('¿Estás seguro de que quieres eliminar todas las cards?')) {
                return;
            }
            const container = document.getElementById('cardsContainer');
            container.innerHTML = `
                <div class="empty-state">
                    <h3>No hay cards aún</h3>
                    <p>Agrega tu primera card usando el formulario superior</p>
                </div>
            `;
            // Reiniciar contador
            cardCounter = 0;
            document.getElementById('formErrorMsg').style.display = 'none';
        }
        
        // Resetear formulario
        function resetForm() {
            document.getElementById('cardTitle').value = '';
            document.getElementById('cardText').value = '';
            document.getElementById('imageUpload').value = '';
            const preview = document.getElementById('imagePreview');
            preview.src = '';
            preview.style.display = 'none';
            selectedImageUrl = null;
        }
    
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  mobileNavToggleBtn.addEventListener('click', mobileNavToogle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Init swiper tabs sliders
   */
  function initSwiperTabs() {
    document
      .querySelectorAll(".init-swiper-tabs")
      .forEach(function(swiperElement) {
        let config = JSON.parse(
          swiperElement.querySelector(".swiper-config").innerHTML.trim()
        );

        const dotsContainer = swiperElement
          .closest("section")
          .querySelector(".js-custom-dots");
        if (!dotsContainer) return;

        const customDots = dotsContainer.querySelectorAll("a");

        // Remove the default pagination setting
        delete config.pagination;

        const swiperInstance = new Swiper(swiperElement, config);

        swiperInstance.on("slideChange", function() {
          updateSwiperTabsPagination(swiperInstance, customDots);
        });

        customDots.forEach((dot, index) => {
          dot.addEventListener("click", function(e) {
            e.preventDefault();
            swiperInstance.slideToLoop(index);
            updateSwiperTabsPagination(swiperInstance, customDots);
          });
        });

        updateSwiperTabsPagination(swiperInstance, customDots);
      });
  }

  function updateSwiperTabsPagination(swiperInstance, customDots) {
    const activeIndex = swiperInstance.realIndex;
    customDots.forEach((dot, index) => {
      if (index === activeIndex) {
        dot.classList.add("active");
      } else {
        dot.classList.remove("active");
      }
    });
  }

  window.addEventListener("load", initSwiperTabs);

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Init isotope layout and filters
   */
  document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
    let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

    let initIsotope;
    imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
      initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort
      });
    });

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
      filters.addEventListener('click', function() {
        isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
        this.classList.add('filter-active');
        initIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        if (typeof aosInit === 'function') {
          aosInit();
        }
      }, false);
    });

  });

})();