const navToggle = document.querySelector('.nav-toggle');
const mobileDrawer = document.querySelector('.mobile-drawer');
const navLinks = document.querySelectorAll('.mobile-drawer a, .nav-links a');

if (navToggle && mobileDrawer) {
  navToggle.addEventListener('click', () => {
    const isOpen = mobileDrawer.classList.toggle('open');
    navToggle.classList.toggle('open', isOpen);
    navToggle.setAttribute('aria-expanded', String(isOpen));
    mobileDrawer.setAttribute('aria-hidden', String(!isOpen));
  });
}

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    if (mobileDrawer.classList.contains('open')) {
      mobileDrawer.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
      mobileDrawer.setAttribute('aria-hidden', 'true');
    }
  });
});
