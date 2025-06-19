// js/backToTop.js
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('backToTop');
  window.addEventListener('scroll', () => {
    const scrollY   = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    // Opacité entre 0 (page tout en haut) et 1 (page tout en bas)
    const opacity = Math.min(Math.max(scrollY / docHeight, 0), 1);
    btn.style.opacity = opacity;
    // Active la classe visible pour pointer-events
    if (opacity > 0.1) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
