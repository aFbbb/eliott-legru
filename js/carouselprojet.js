function setupCarousel(carouselId) {
    const carousel = document.getElementById(carouselId);
    const images = carousel.querySelectorAll('.carousel-img');
    const prevBtn = carousel.querySelector('.prev');
    const nextBtn = carousel.querySelector('.next');
    let current = 0;

    function showImage(index) {
        images.forEach((img, i) => {
            if(i === index) {
                img.classList.add('active');
                img.style.zIndex = 1;
            } else {
                img.classList.remove('active');
                img.style.zIndex = 0;
            }
        });
    }

    prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        current = (current - 1 + images.length) % images.length;
        showImage(current);
    });
    nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        current = (current + 1) % images.length;
        showImage(current);
    });

    showImage(0);
}

// Ouvre une modale et applique le flou au fond
function openModal(modalId) {
    document.getElementById(modalId).classList.add('show');
    document.body.style.overflow = 'hidden';
    document.body.classList.add('blurred-bg');
}

// Ferme une modale et enlève le flou du fond
function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('show');
    document.body.style.overflow = 'auto';
    document.body.classList.remove('blurred-bg');
}

document.addEventListener('DOMContentLoaded', function () {
    // Initialiser chaque carousel
    for (let i = 1; i <= 4; i++) {
        setupCarousel('carousel' + i);

        // OUVERTURE
        document.getElementById('clickableImage' + i).onclick = function() {
            openModal('myModal' + i);
        };

        // FERMETURE PAR LA CROIX
        document.getElementById('closeModal' + i).onclick = function() {
            closeModal('myModal' + i);
        };

        // FERMETURE PAR CLIC EN DEHORS DU CONTENU
        document.getElementById('myModal' + i).onclick = function(event) {
            if (event.target === this) {
                closeModal('myModal' + i);
            }
        };
    }

    // FERMETURE PAR ESCAPE
    document.addEventListener('keydown', function(e) {
        if (e.key === "Escape") {
            for (let i = 1; i <= 4; i++) {
                closeModal('myModal' + i);
            }
        }
    });
});
