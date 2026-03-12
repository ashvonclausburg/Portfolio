import './style.css'

// Scroll reveal for project cards
const cards = [...document.querySelectorAll('.project-card')]

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const idx = cards.indexOf(entry.target)
        entry.target.style.transitionDelay = `${(idx % 3) * 0.08}s`
        entry.target.classList.add('is-visible')
        observer.unobserve(entry.target)
      }
    })
  },
  { threshold: 0.1 }
)

cards.forEach(card => observer.observe(card))
