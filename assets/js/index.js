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

/*---carrossel---*/

const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
const dots = document.querySelectorAll('.dot');
let current = 0;


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

  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === current);
  });
}

showSlide(current);

nextBtn.addEventListener('click', () => {
  showSlide(current - 1);
});
prevBtn.addEventListener('click', () => {
  showSlide(current + 1);
});

// autoplay opcional
setInterval(() => {
  showSlide(current + 1);
}, 7000); // muda a cada x segundos

