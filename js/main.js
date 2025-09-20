// js/main.js
document.addEventListener('DOMContentLoaded', () => {
  const btns = document.querySelectorAll('.menu-toggle');
  btns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const isOpen = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!isOpen));
    });
  });
});
