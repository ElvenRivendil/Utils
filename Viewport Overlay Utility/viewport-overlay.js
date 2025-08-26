// File: viewport-overlay.js
// File --help: viewprot-overlay_readme.md
// Title: Viewport Overlay Utility Documentation
// Version: rev.1.01
// Author: ElvenRivendil + Днева (ИИ-ассистент)
// Date: 2025-08-26
// Description: Подробная документация для утилиты viewport-overlay.js, 
// включая установку, использование и особенности работы в Chrome.

(function(){
  var overlayOpacity = 0.5; // прозрачность overlay, 50%

  // Определяем текущий breakpoint
  function getCurrentBreakpoint() {
    if (window.matchMedia("(max-width: 480px)").matches) return "mobile";
    if (window.matchMedia("(max-width: 768px)").matches) return "tablet";
    if (window.matchMedia("(min-width: 769px)").matches) return "desktop";
    return "unknown";
  }

  // Определяем все активные @media из подключённых CSS
// Определяем "текущий" активный @media для каждого файла CSS
function getCurrentMediaQuery() {
  let fileMatches = {};

  for (let sheet of document.styleSheets) {
    try {
      if (!sheet.cssRules) continue;
      let file = sheet.href ? sheet.href.split("/").pop() : "inline <style>";

      for (let rule of sheet.cssRules) {
        if (rule instanceof CSSMediaRule) {
          let condition = rule.conditionText;
          if (window.matchMedia(condition).matches) {
            if (!fileMatches[file]) {
              fileMatches[file] = { max: null, min: null };
            }

            // парсим max-width / min-width
            let maxMatch = condition.match(/max-width:\s*(\d+)px/);
            let minMatch = condition.match(/min-width:\s*(\d+)px/);

            if (maxMatch) {
              let val = parseInt(maxMatch[1], 10);
              if (fileMatches[file].max === null || val < fileMatches[file].max) {
                fileMatches[file].max = val;
              }
            }

            if (minMatch) {
              let val = parseInt(minMatch[1], 10);
              if (fileMatches[file].min === null || val > fileMatches[file].min) {
                fileMatches[file].min = val;
              }
            }
          }
        }
      }
    } catch (e) {
      console.warn("Нельзя прочитать stylesheet:", sheet.href, e);
    }
  }

  // формируем список строк
  let results = [];
  for (let file in fileMatches) {
    let parts = [];
    if (fileMatches[file].max !== null) {
      parts.push(`(max-width: ${fileMatches[file].max}px)`);
    }
    if (fileMatches[file].min !== null) {
      parts.push(`(min-width: ${fileMatches[file].min}px)`);
    }
    results.push(parts.join(" and ") + " — " + file);
  }

  return results.length ? results.join("\n") : "Нет активных @media";
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
                  "\nZoom: " + getPageZoom() +
                  "\n" + getCurrentBreakpoint() +
                  "\n" + getCurrentMediaQuery();
  }

  updateOverlay(); // первый запуск
  window.addEventListener('resize', updateOverlay); // обновление при изменении размера окна
})();
