/* ===== DigitMarkT - scripts.js ===== */
console.log("DigitMarkT website loaded.");

/* ─── Mobile Nav Toggle ─── */
(function () {
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('nav');
  if (!hamburger || !nav) return;

  hamburger.addEventListener('click', () => {
    nav.classList.toggle('open');
    const expanded = nav.classList.contains('open');
    hamburger.setAttribute('aria-expanded', expanded);
  });

  // Close nav on link click (mobile)
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => nav.classList.remove('open'));
  });
})();

/* ─── Scroll Reveal ─── */
(function () {
  const targets = document.querySelectorAll('.reveal');
  if (!targets.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  targets.forEach(el => observer.observe(el));
})();

/* ─── Contact Form (simulated submit) ─── */
(function () {
  const form = document.querySelector('.contact-form');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const btn = form.querySelector('button[type="submit"]');
    const originalText = btn.textContent;

    btn.disabled = true;
    btn.textContent = 'Sending…';

    // Simulate async send (swap out for real fetch/FormSubmit etc.)
    setTimeout(() => {
      btn.textContent = '✓ Message Sent!';
      btn.style.background = '#00e676';
      btn.style.color = '#020c14';
      form.reset();

      setTimeout(() => {
        btn.textContent = originalText;
        btn.disabled = false;
        btn.style.background = '';
        btn.style.color = '';
      }, 3500);
    }, 1200);
  });
})();

/* ─── Typed cursor effect on hero headline ─── */
(function () {
  const el = document.querySelector('.typed-text');
  if (!el) return;

  const phrases = [
    'Web Development.',
    'UI/UX Design.',
    'App Solutions.',
    'Digital Growth.',
  ];

  let phraseIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function type() {
    const current = phrases[phraseIndex];

    if (!deleting) {
      el.textContent = current.slice(0, ++charIndex);
      if (charIndex === current.length) {
        deleting = true;
        setTimeout(type, 1800);
        return;
      }
    } else {
      el.textContent = current.slice(0, --charIndex);
      if (charIndex === 0) {
        deleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
      }
    }

    setTimeout(type, deleting ? 45 : 80);
  }

  type();
})();
