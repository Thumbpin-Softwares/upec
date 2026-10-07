// UPEC site scripts — mobile nav, scroll reveal, counters, lightbox, contact form

document.addEventListener('DOMContentLoaded', function () {

  /* Enable reveal-on-scroll only once JS is confirmed running */
  document.body.classList.add('js-ready');

  /* Mobile nav toggle — breakpoint must match the CSS media query that
     switches .nav to the fixed/off-canvas panel (see style.css) */
  var MOBILE_NAV_BP = 1200;
  var isMobileNav = function () { return window.innerWidth <= MOBILE_NAV_BP; };
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.nav');
  if (toggle && nav) {
    var closeMobileNav = function () {
      nav.classList.remove('open');
      toggle.classList.remove('open');
      document.body.classList.remove('nav-open');
    };
    toggle.addEventListener('click', function () {
      var willOpen = !nav.classList.contains('open');
      nav.classList.toggle('open', willOpen);
      toggle.classList.toggle('open', willOpen);
      document.body.classList.toggle('nav-open', willOpen);
    });
    Array.prototype.forEach.call(nav.children, function (li) {
      var link = li.querySelector(':scope > a');
      var dropdown = li.querySelector('.dropdown');
      if (dropdown && link) {
        link.addEventListener('click', function (e) {
          if (isMobileNav()) {
            e.preventDefault();
            li.classList.toggle('open');
          }
        });
        dropdown.querySelectorAll('a').forEach(function (sublink) {
          sublink.addEventListener('click', function () {
            if (isMobileNav()) closeMobileNav();
          });
        });
      } else if (link) {
        link.addEventListener('click', function () {
          if (isMobileNav()) closeMobileNav();
        });
      }
    });
  }

  /* Highlight active nav link */
  var here = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav a, .dropdown a').forEach(function (a) {
    var href = a.getAttribute('href');
    if (href === here) {
      a.closest('li') && a.closest('li').classList.add('active');
      if (a.classList.contains('top-link')) a.closest('li').classList.add('active');
    }
  });

  /* Scroll reveal */
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('in'); });
  }

  /* Animated stat counters */
  var counters = document.querySelectorAll('[data-count]');
  if (counters.length) {
    var counted = false;
    var runCounters = function () {
      if (counted) return;
      counted = true;
      counters.forEach(function (el) {
        var target = parseFloat(el.getAttribute('data-count'));
        var suffix = el.getAttribute('data-suffix') || '';
        var duration = 1400;
        var start = null;
        function step(ts) {
          if (!start) start = ts;
          var progress = Math.min((ts - start) / duration, 1);
          var value = Math.floor(progress * target);
          el.textContent = value + suffix;
          if (progress < 1) requestAnimationFrame(step);
          else el.textContent = target + suffix;
        }
        requestAnimationFrame(step);
      });
    };
    var statsBlock = document.querySelector('.stats');
    if (statsBlock && 'IntersectionObserver' in window) {
      var statIo = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) { if (e.isIntersecting) runCounters(); });
      }, { threshold: 0.4 });
      statIo.observe(statsBlock);
    } else {
      runCounters();
    }
  }

  /* Lightbox for gallery images */
  var lightbox = document.getElementById('lightbox');
  if (lightbox) {
    var lbImg = lightbox.querySelector('img');
    var lbCap = lightbox.querySelector('.lb-cap');
    document.querySelectorAll('[data-lightbox]').forEach(function (trigger) {
      trigger.addEventListener('click', function (e) {
        e.preventDefault();
        var full = trigger.getAttribute('data-lightbox');
        var cap = trigger.getAttribute('data-caption') || '';
        lbImg.setAttribute('src', full);
        lbCap.textContent = cap;
        lightbox.classList.add('open');
      });
    });
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox || e.target.classList.contains('lb-close')) {
        lightbox.classList.remove('open');
        lbImg.setAttribute('src', '');
      }
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') { lightbox.classList.remove('open'); lbImg.setAttribute('src', ''); }
    });
  }

  /* Contact form — front-end placeholder until connected to a backend / WP handler */
  var form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var status = document.getElementById('form-status');
      status.textContent = 'Thanks! Your message has been noted — our team will get back to you shortly.';
      status.className = 'ok';
      form.reset();
    });
  }

  /* Footer year */
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
