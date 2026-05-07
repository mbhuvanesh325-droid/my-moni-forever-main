// Floating Hearts Generator
function createFloatingHearts(containerId, count) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const heartSVG = `<svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>`;

  for (let i = 0; i < count; i++) {
    const left = Math.random() * 100;
    const delay = Math.random() * 10;
    const dur = 7 + Math.random() * 9;
    const size = 14 + Math.random() * 28;
    const opacity = 0.5 + Math.random() * 0.5;
    const drift = (Math.random() - 0.5) * 80;

    const span = document.createElement("span");
    span.style.position = "absolute";
    span.style.left = left + "%";
    span.style.bottom = "0";
    span.style.animation = `riseDrift ${dur}s linear infinite`;
    span.style.animationDelay = delay + "s";
    span.style.opacity = opacity;
    span.style.setProperty("--drift", drift + "px");

    const svgWrapper = document.createElement("span");
    svgWrapper.innerHTML = heartSVG;
    const svg = svgWrapper.firstChild;
    svg.style.width = size + "px";
    svg.style.height = size + "px";
    svg.style.color = "oklch(0.55 0.24 300)";
    svg.style.filter = "drop-shadow(0 0 10px rgba(168,85,247,0.7))";
    svg.style.animation = "heartBeat 1.2s ease-in-out infinite";
    svg.style.display = "block";

    span.appendChild(svg);
    container.appendChild(span);
  }
}

// Initialize hearts on both pages
document.addEventListener("DOMContentLoaded", function () {
  createFloatingHearts("hearts1", 12);
  createFloatingHearts("hearts2", 10);
});
