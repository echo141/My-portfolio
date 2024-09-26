// Параллакс-эффект
window.addEventListener('scroll', function() {
    const parallaxSections = document.querySelectorAll('.parallax-section');
    
    parallaxSections.forEach((section) => {
      let scrollPosition = window.scrollY;
      section.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
    });
  });
  