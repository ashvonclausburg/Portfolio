// Shared nav — single source of truth for all pages
document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('nav');
  if (!nav) return;

  // Detect base path (works for both local dev and GitHub Pages)
  const base = document.querySelector('base')?.getAttribute('href') || '/';

  nav.innerHTML = `
    <a class="nav-name" href="${base}">AV</a>
    <div class="nav-links">
      <a href="${base}#work">Work</a>
      <a href="${base}images/vonClausburgResume2026.pdf" target="_blank" rel="noopener">Resume</a>
      <a href="mailto:vonclausburg@gmail.com">Contact</a>
    </div>
  `;
});
