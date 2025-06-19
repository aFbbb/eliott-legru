// js/videoHover.js
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.element').forEach(el => {
    const img   = el.querySelector('.imgCI');
    const video = el.querySelector('.videoCI');

    el.addEventListener('mouseenter', () => {
      video.currentTime = 0;
      video.play();
      video.style.opacity = 1;
      img.style.opacity = 0;
      img.style.pointerEvents = 'none'; // pour laisser passer la souris vers la vidéo
    });

    el.addEventListener('mouseleave', () => {
      video.pause();
      video.style.opacity = 0;
      img.style.opacity = 1;
      img.style.pointerEvents = '';    // restore
    });
  });
});
