// ── Testimonials ──────────────────────────────────────────────
const testimonialsWindow = document.querySelector('.testimonials-window');
const testimonialsTrack  = document.querySelector('.testimonials-track');
const prevBtn = document.getElementById('testimonials-prev');
const nextBtn = document.getElementById('testimonials-next');

if (testimonialsWindow && testimonialsTrack) {
  const CARD_WIDTH = 320;
  const GAP        = 24; // 1.5rem at 16px base
  const STEP       = CARD_WIDTH + GAP;
  const SPEED      = 0.7; // px per frame (~42px/s at 60fps)

  let raf;
  let manualTimeout;
  let isManual = false;
  let accumulator = 0;

  function halfWidth() {
    return testimonialsTrack.scrollWidth / 2;
  }

  function tick() {
    if (!isManual) {
      accumulator += SPEED;
      if (accumulator >= 1) {
        const px = Math.floor(accumulator);
        accumulator -= px;
        testimonialsWindow.scrollLeft += px;
        if (testimonialsWindow.scrollLeft >= halfWidth()) {
          testimonialsWindow.scrollLeft -= halfWidth();
        }
      }
    }
    raf = requestAnimationFrame(tick);
  }

  function resumeAuto() {
    isManual = false;
  }

  function snapBy(direction) {
    clearTimeout(manualTimeout);
    isManual = true;

    const current = testimonialsWindow.scrollLeft;
    const target  = Math.round(current / STEP) * STEP + direction * STEP;
    testimonialsWindow.scrollLeft = target;

    // seamless loop boundaries
    const half = halfWidth();
    if (testimonialsWindow.scrollLeft >= half) testimonialsWindow.scrollLeft -= half;
    if (testimonialsWindow.scrollLeft < 0)     testimonialsWindow.scrollLeft += half;

    manualTimeout = setTimeout(resumeAuto, 4000);
  }

  prevBtn && prevBtn.addEventListener('click', () => snapBy(-1));
  nextBtn && nextBtn.addEventListener('click', () => snapBy(1));

  // pause auto-scroll on hover
  testimonialsWindow.addEventListener('mouseenter', () => { isManual = true; });
  testimonialsWindow.addEventListener('mouseleave', () => {
    clearTimeout(manualTimeout);
    manualTimeout = setTimeout(resumeAuto, 1000);
  });

  raf = requestAnimationFrame(tick);
}

// ── Nav ───────────────────────────────────────────────────────
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
