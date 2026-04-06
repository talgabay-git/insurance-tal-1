/* ============================================================
   TRIO - Insurance & Finance | script.js
   ============================================================ */

/* ── Sticky header ─────────────────────────────────────── */
const header = document.getElementById('site-header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 60);
});

/* ── Mobile hamburger menu ──────────────────────────────── */
const hamburger   = document.getElementById('hamburger');
const mobileMenu  = document.getElementById('mobile-menu');

hamburger.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('open');
  hamburger.classList.toggle('open', isOpen);
  hamburger.setAttribute('aria-expanded', isOpen);
  mobileMenu.setAttribute('aria-hidden', !isOpen);
});

/* Close mobile menu when a link is clicked */
mobileMenu.querySelectorAll('.mobile-nav-link').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    mobileMenu.setAttribute('aria-hidden', 'true');
  });
});

/* ── Active nav link on scroll ──────────────────────────── */
const sections  = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-link');

const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
      });
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(s => sectionObserver.observe(s));

/* ── Scroll-reveal animations ───────────────────────────── */
const fadeEls = document.querySelectorAll('.fade-in-up, .fade-in-right');

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

fadeEls.forEach(el => revealObserver.observe(el));

/* ── Counter animation ──────────────────────────────────── */
function animateCount(el, target, duration = 1600) {
  const isNumeric = /^\d+$/.test(target);
  if (!isNumeric) return;

  let start = 0;
  const end   = parseInt(target, 10);
  const step  = Math.ceil(end / (duration / 16));
  const plusEl = el.querySelector('.stat-plus');

  const tick = () => {
    start = Math.min(start + step, end);
    el.childNodes[0].textContent = start.toLocaleString('he-IL');
    if (start < end) requestAnimationFrame(tick);
  };
  tick();
}

const statNumbers = document.querySelectorAll('.stat-number');
const statsBar    = document.querySelector('.stats-bar');
let   counted     = false;

if (statsBar) {
  new IntersectionObserver(entries => {
    if (entries[0].isIntersecting && !counted) {
      counted = true;
      statNumbers.forEach(el => {
        const raw = el.childNodes[0].textContent.trim();
        animateCount(el, raw);
      });
    }
  }, { threshold: 0.5 }).observe(statsBar);
}

/* ── Back-to-top button ─────────────────────────────────── */
const backToTop = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
  backToTop.classList.toggle('visible', window.scrollY > 400);
});
backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ── Contact form validation & submit ──────────────────── */
const form       = document.getElementById('contact-form');
const successMsg = document.getElementById('form-success');

if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    let valid = true;

    /* Helper: find the error span for an input by convention: id="<input-id>-error" */
    const getErrEl = id => form.querySelector(`#${id}-error`);

    /* Clear previous errors */
    form.querySelectorAll('.form-input, .form-select, .form-textarea').forEach(input => {
      input.classList.remove('error');
      const errEl = getErrEl(input.id);
      if (errEl) errEl.textContent = '';
    });

    /* Validate required fields */
    form.querySelectorAll('[required]').forEach(input => {
      if (!input.value.trim()) {
        input.classList.add('error');
        const errEl = getErrEl(input.id);
        if (errEl) errEl.textContent = 'שדה זה הינו חובה';
        valid = false;
      }
    });

    /* Validate email */
    const emailInput = form.querySelector('#email');
    if (emailInput && emailInput.value.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)) {
      emailInput.classList.add('error');
      const errEl = getErrEl('email');
      if (errEl) errEl.textContent = 'כתובת דוא"ל לא תקינה';
      valid = false;
    }

    /* Validate phone */
    const phoneInput = form.querySelector('#phone');
    if (phoneInput && phoneInput.value.trim() && !/^[\d\s\-+()]{7,15}$/.test(phoneInput.value)) {
      phoneInput.classList.add('error');
      const errEl = getErrEl('phone');
      if (errEl) errEl.textContent = 'מספר טלפון לא תקין';
      valid = false;
    }

    if (!valid) return;

    /* Submit to FormSubmit (sends to office@pf-invest.co.il + CC tal@pf-invest.co.il) */
    const submitBtn = document.getElementById('submit-btn');
    submitBtn.disabled = true;
    submitBtn.querySelector('.btn-text').textContent = 'שולח...';

    const data = new FormData(form);
    fetch('https://formsubmit.co/ajax/office@pf-invest.co.il', {
      method: 'POST',
      headers: { 'Accept': 'application/json' },
      body: data
    })
    .then(res => res.json())
    .then(res => {
      form.reset();
      submitBtn.disabled = false;
      submitBtn.querySelector('.btn-text').textContent = 'שלח הודעה';
      if (successMsg) {
        successMsg.removeAttribute('hidden');
        setTimeout(() => successMsg.setAttribute('hidden', ''), 5000);
      }
    })
    .catch(() => {
      submitBtn.disabled = false;
      submitBtn.querySelector('.btn-text').textContent = 'שלח הודעה';
      alert('אירעה שגיאה. אנא נסו שנית או צרו קשר ישירות.');
    });
  });
}

/* ── Smooth scroll for all anchor links ─────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const offset = header ? header.offsetHeight : 0;
    const top    = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});
