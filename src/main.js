import './style.css'

// Scroll reveal for project cards
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Stagger each card slightly based on its index in the grid
        const cards = [...document.querySelectorAll('.project-card')]
        const idx = cards.indexOf(entry.target)
        entry.target.style.transitionDelay = `${(idx % 2) * 0.08}s`
        entry.target.classList.add('is-visible')
        observer.unobserve(entry.target)
      }
    })
  },
  { threshold: 0.1 }
)

document.querySelectorAll('.project-card').forEach(card => observer.observe(card))
