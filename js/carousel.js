  // Initialiser
  showImage(currentIndex);

// Initialisation du carousel Bootstrap
document.addEventListener('DOMContentLoaded', function () {
  var myCarousel = document.getElementById('carouselExampleCaptions');
  new bootstrap.Carousel(myCarousel, {
    interval: 2000,
    ride: 'carousel',
  });
});