// js/loader.js
(function() {
  function removeLoader() {
    const loader = document.getElementById('loader');
    if (!loader) return;
    loader.style.opacity = '0';
    setTimeout(() => loader.remove(), 400);
  }

  // Si la page est déjà complètement chargée, on déclenche tout de suite
  if (document.readyState === 'complete') {
    removeLoader();
  } else {
    window.addEventListener('load', removeLoader);
  }
})();
