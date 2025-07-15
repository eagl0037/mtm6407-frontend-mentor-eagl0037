// Toggle mobile menu
document.getElementById('mobile-toggle').addEventListener('click', () => {
  const menu = document.getElementById('mobile-menu');
  menu.classList.toggle('show');
});





// Mobile toggle
document.getElementById('mobile-toggle').addEventListener('click', () => {
  document.getElementById('mobile-menu').classList.toggle('show');
});

// Scroll animations
const animatedElements = document.querySelectorAll('[data-animate]');

function handleScroll() {
  animatedElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll);
