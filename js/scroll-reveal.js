document.addEventListener('DOMContentLoaded', () => {
  const revealEls = document.querySelectorAll('.scroll-reveal');
  const observer = new IntersectionObserver((entries, obs) => {
     entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  revealEls.forEach(el => observer.observe(el));
});
