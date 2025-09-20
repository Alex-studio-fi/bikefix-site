// js/main.js
document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.menu-toggle');

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const isOpen = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!isOpen));
      document.body.classList.toggle('menu-open', !isOpen);
    });
  });

  // Close menu when a nav link is clicked (mobile)
  document.querySelectorAll('#main-menu a').forEach((link) => {
    link.addEventListener('click', () => {
      document.body.classList.remove('menu-open');
      buttons.forEach((b) => b.setAttribute('aria-expanded', 'false'));
    });
  });
});

