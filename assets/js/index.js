const headerFrame = document.querySelector('.header-frame');

window.addEventListener('message', (event) => {
  if (event.source !== headerFrame.contentWindow) {
    return;
  }

  const message = event.data;
  if (message?.type !== 'header-menu' || typeof message.open !== 'boolean') {
    return;
  }

  headerFrame.classList.toggle('sidebar-open', message.open);
});


/* --- Carrosséis independentes --- */

const carrosseis = document.querySelectorAll('.carousel');

carrosseis.forEach((carousel) => {

  const slides = carousel.querySelectorAll('.slide');
  const nextBtn = carousel.querySelector('.next');
  const prevBtn = carousel.querySelector('.prev');

  let current = 0;
  let autoplay;

  function showSlide(index) {

    if (index >= slides.length) {
      current = 0;
    } else if (index < 0) {
      current = slides.length - 1;
    } else {
      current = index;
    }

    slides.forEach((slide, i) => {

      slide.classList.remove(
        'active',
        'prev-slide',
        'next-slide'
      );

      if (i === current) {
        slide.classList.add('active');

      } else if (
        i === (current - 1 + slides.length) % slides.length
      ) {
        slide.classList.add('prev-slide');

      } else if (
        i === (current + 1) % slides.length
      ) {
        slide.classList.add('next-slide');
      }

    });

  }

  // Botão próximo
  nextBtn.addEventListener('click', () => {
    showSlide(current + 1);
    resetAutoplay();
  });

  // Botão anterior
  prevBtn.addEventListener('click', () => {
    showSlide(current - 1);
    resetAutoplay();
  });

  // Reinicia o autoplay
  function resetAutoplay() {
    clearInterval(autoplay);

    autoplay = setInterval(() => {
      showSlide(current + 1);
    }, 7000);
  }

  // Inicialização
  showSlide(current);
  resetAutoplay();

});