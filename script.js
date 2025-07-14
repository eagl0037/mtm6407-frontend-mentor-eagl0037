const toggle = document.getElementById('mobile-toggle');
const navbar = document.getElementById('navbar');

toggle.addEventListener('click', () => {
  navbar.classList.toggle('active');
});
