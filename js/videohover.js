  
document.querySelectorAll('.element').forEach(el => {
  const img   = el.querySelector('.imgCI');
  const video = el.querySelector('.videoCI');
  img.addEventListener('mouseenter', () => {
    video.currentTime = 0;
    video.play();
    video.style.opacity = 1;
    img.style.opacity = 0;
  });
  img.addEventListener('mouseleave', () => {
     video.pause();
     video.style.opacity = 0;
    img.style.opacity = 1;
  });
});