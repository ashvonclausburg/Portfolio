// Shared nav — single source of truth for all pages
document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('nav');
  if (!nav) return;

  // Detect base path from this script's own URL
  // In dev: /nav.js → base = /
  // On GitHub Pages: /Portfolio/nav.js → base = /Portfolio/
  const scriptSrc = document.querySelector('script[src*="nav.js"]')?.src || '';
  const base = scriptSrc ? new URL(scriptSrc).pathname.replace('nav.js', '') : '/';

  nav.innerHTML = `
    <a class="nav-name" href="${base}">AV</a>
    <div class="nav-links">
      <a href="${base}#work">Work</a>
      <a href="${base}images/vonClausburgResume2026.pdf" target="_blank" rel="noopener">Resume</a>
      <a href="mailto:vonclausburg@gmail.com">Contact</a>
    </div>
  `;
});
