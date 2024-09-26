// Параллакс-эффект и прокрутка
window.addEventListener('scroll', function() {
  const parallaxSections = document.querySelectorAll('.parallax-section');
  
  parallaxSections.forEach((section) => {
    let scrollPosition = window.scrollY;
    section.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
  });
});

// Прокрутка вниз по нажатию на кнопку
function scrollDown() {
  const aboutSection = document.getElementById('about');
  aboutSection.scrollIntoView({ behavior: 'smooth' });
}
