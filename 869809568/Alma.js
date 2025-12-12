// script.js
// Ajusta el font-size raíz en función del ancho de viewport.
// Basado en técnica "responsive REM" — todo en CSS usa rem y así escala bien.

(function () {
  // configuración:
  const MIN_WIDTH = 320;   // ancho mínimo esperado (px)
  const MAX_WIDTH = 1400;  // ancho máximo para escalar (px)
  const MIN_FONT = 14;     // font-size mínimo raíz (px)
  const MAX_FONT = 20;     // font-size máximo raíz (px)

  // Debounce para resize (evita llamadas continuas)
  function debounce(fn, wait = 100) {
    let t;
    return function (...args) {
      clearTimeout(t);
      t = setTimeout(() => fn.apply(this, args), wait);
    };
  }

  function clamp(n, a, b) {
    return Math.max(a, Math.min(b, n));
  }

  function setRootFontSize() {
    const w = window.innerWidth;
    // Normalizamos w entre MIN_WIDTH y MAX_WIDTH
    const norm = (clamp(w, MIN_WIDTH, MAX_WIDTH) - MIN_WIDTH) / (MAX_WIDTH - MIN_WIDTH);
    const font = MIN_FONT + (MAX_FONT - MIN_FONT) * norm;
    // Aplicar en px para compatibilidad total
    document.documentElement.style.fontSize = font.toFixed(2) + 'px';
    // (opcional) exponer en data-attribute para debugging / estilos
    document.documentElement.setAttribute('data-viewport-width', Math.round(w));
  }

  // Run al inicio y al redimensionar (debounced)
  setRootFontSize();
  window.addEventListener('resize', debounce(setRootFontSize, 120));

  // Opcional: si quieres reaccionar a cambios de orientación en móviles
  window.addEventListener('orientationchange', function () {
    setTimeout(setRootFontSize, 200);
  });
})();



