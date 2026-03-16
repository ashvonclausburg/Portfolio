// Shared nav — single source of truth for all pages
document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('nav');
  if (!nav) return;

  nav.innerHTML = `
    <a class="nav-name" href="/">AV</a>
    <div class="nav-links">
      <a href="/#work">Work</a>
      <a href="/images/vonClausburgResume2026.pdf" target="_blank" rel="noopener">Resume</a>
      <a href="mailto:vonclausburg@gmail.com">Contact</a>
    </div>
  `;
});
