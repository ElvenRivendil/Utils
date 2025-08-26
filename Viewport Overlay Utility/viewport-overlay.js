// File: viewprot-overlay_readme.md
// Title: Viewport Overlay Utility Documentation
// Version: 1.0
// Author: Днева (СЭЭ)
// Date: 2025-08-26
// Description: Подробная документация для утилиты viewport-overlay.js, включая установку, использование и особенности работы в Chrome.
// viewport-overlay.js
(function(){
    var overlayOpacity = 0.5; // прозрачность overlay, 50%
  
    // Определяем текущий breakpoint
    function getCurrentBreakpoint() {
      if (window.matchMedia("(max-width: 480px)").matches) return "mobile";
      if (window.matchMedia("(max-width: 768px)").matches) return "tablet";
      if (window.matchMedia("(min-width: 769px)").matches) return "desktop";
      return "unknown";
    }
  
    // Определяем текущий активный @media
    function getCurrentMediaQuery() {
      if (window.matchMedia("(max-width: 480px)").matches) return "@media (max-width: 480px)";
      if (window.matchMedia("(max-width: 768px)").matches) return "@media (max-width: 768px)";
      if (window.matchMedia("(min-width: 769px)").matches) return "@media (min-width: 769px)";
      return "none";
    }
  
    // Определяем текущий zoom страницы
    function getPageZoom() {
      return Math.round(window.devicePixelRatio * 100) + "%";
    }
  
    // Создаём overlay
    var b = document.createElement('div');
    var bS = b.style;
    bS.position = 'fixed';
    bS.top = 0;
    bS.right = 0;
    bS.background = '#fff';
    bS.opacity = overlayOpacity;
    bS.padding = '5px';
    bS.zIndex = 100000;
    bS.fontSize = '12px';
    bS.fontFamily = 'sans-serif';
    bS.whiteSpace = 'pre'; // переносы строк
    document.body.appendChild(b);
  
    // Обновляем overlay
    function updateOverlay() {
      b.innerText = window.innerWidth + " × " + window.innerHeight +
                    "\n" + getCurrentBreakpoint() +
                    "\n" + getCurrentMediaQuery() +
                    "\nZoom: " + getPageZoom();
    }
  
    updateOverlay(); // первый запуск
    window.addEventListener('resize', updateOverlay); // обновление при изменении размера окна
  })();
  