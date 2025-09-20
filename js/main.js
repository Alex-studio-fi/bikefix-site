// js/main.js
document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.menu-toggle');

  // Toggle open/close on button click
  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const isOpen = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!isOpen));
      document.body.classList.toggle('menu-open', !isOpen);
    });
  });

  // Close menu when a nav link is clicked
  document.querySelectorAll('#main-menu a').forEach((link) => {
    link.addEventListener('click', () => {
      document.body.classList.remove('menu-open');
      buttons.forEach((b) => b.setAttribute('aria-expanded', 'false'));
    });
  });

  // Close menu on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.body.classList.remove('menu-open');
      buttons.forEach((b) => b.setAttribute('aria-expanded', 'false'));
    }
  });
});
