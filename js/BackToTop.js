const btn = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const scrollPercent = Math.min(Math.max(scrollY / docHeight, 0), 1);
  // Affichage après 25% de scroll
  if (scrollPercent > 0.25) {
    btn.classList.add('show');
    btn.classList.remove('hide');
  } else {
    btn.classList.add('hide');
    btn.classList.remove('show');
  }
  // Opacité
  btn.style.opacity = scrollPercent;
  // Hauteur de l'oblong (de 30px à 80px)
  const newHeight = 30 + (80 - 30) * scrollPercent;
  btn.style.height = newHeight + 'px';
  // Taille de la flèche (proportionnelle à la hauteur)
  btn.style.fontSize = (newHeight * 0.8) + 'px';
  // Ajuste la line-height pour centrer verticalement
  btn.style.lineHeight = newHeight + 'px';
});

btn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
