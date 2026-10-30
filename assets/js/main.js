(function () {
  'use strict';

  const data = window.PORTFOLIO;
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  document.documentElement.classList.add('js');

  const escapeHtml = (value) =>
    String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);

  const categoryLabels = {
    professional: 'Profesional',
    research: 'Riset',
    study: 'Studi Independen',
    organization: 'Organisasi',
  };

  /* ---------- Render: stats, skills, achievements ---------- */
  $('#stats').innerHTML = data.stats
    .map(
      (stat) => `
      <div class="stat reveal">
        <span class="stat__value" data-count="${stat.value}" data-decimals="${stat.decimals || 0}" data-prefix="${escapeHtml(stat.prefix || '')}">
          ${escapeHtml(stat.prefix || '')}${stat.value.toFixed(stat.decimals || 0)}
        </span>
        <span class="stat__label">${escapeHtml(stat.label)}</span>
      </div>`
    )
    .join('');

  $('#skills').innerHTML = data.skills
    .map(
      (group) => `
      <div class="skill-group">
        <h4>${escapeHtml(group.group)}</h4>
        <ul>${group.items.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>
      </div>`
    )
    .join('');

  $('#achievements').innerHTML = data.achievements.map((item) => `<li>${escapeHtml(item)}</li>`).join('');

  /* ---------- Render: experience timeline ---------- */
  const chevron = '<svg class="tl-chevron" viewBox="0 0 24 24" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>';

  $('#timeline').innerHTML = data.experiences
    .map((exp, index) => {
      const bodyId = `exp-body-${index}`;
      const thumb = exp.image
        ? `<button class="tl-thumb" type="button" data-image="${exp.image}" data-caption="${escapeHtml(exp.org)}" aria-label="Lihat foto: ${escapeHtml(exp.org)}">
             <img src="${exp.image}" alt="" loading="lazy">
           </button>`
        : '';
      return `
      <li class="tl-item reveal${index === 0 ? ' is-open' : ''}" data-category="${exp.category}">
        <div class="tl-card">
          <button class="tl-head" type="button" aria-expanded="${index === 0}" aria-controls="${bodyId}">
            <span>
              <span class="tl-org">${escapeHtml(exp.org)}</span>
              <span class="tl-role">${escapeHtml(exp.role)}</span>
              <span class="tag tl-cat">${categoryLabels[exp.category]}</span>
            </span>
            <span class="tl-period">${escapeHtml(exp.period)}</span>
            ${chevron}
          </button>
          <div class="tl-body" id="${bodyId}">
            <div>
              <div class="tl-content">
                <ul>${exp.points.map((point) => `<li>${escapeHtml(point)}</li>`).join('')}</ul>
                ${thumb}
              </div>
            </div>
          </div>
        </div>
      </li>`;
    })
    .join('');

  $('#timeline').addEventListener('click', (event) => {
    const thumb = event.target.closest('.tl-thumb');
    if (thumb) {
      openImage(thumb.dataset.image, thumb.dataset.caption);
      return;
    }
    const head = event.target.closest('.tl-head');
    if (!head) {
      return;
    }
    const item = head.closest('.tl-item');
    const isOpen = item.classList.toggle('is-open');
    head.setAttribute('aria-expanded', String(isOpen));
  });

  $('#exp-tabs').addEventListener('click', (event) => {
    const tab = event.target.closest('[role="tab"]');
    if (!tab) {
      return;
    }
    $$('[role="tab"]', $('#exp-tabs')).forEach((button) => button.setAttribute('aria-selected', String(button === tab)));
    const filter = tab.dataset.filter;
    $$('.tl-item').forEach((item) => {
      item.hidden = filter !== 'all' && item.dataset.category !== filter;
      item.classList.add('is-visible');
    });
  });

  /* ---------- Render: projects + filter ---------- */
  $('#project-grid').innerHTML = data.projects
    .map((project, index) => {
      const initials = project.title.replace(/[^A-Za-z ]/g, '').split(' ').filter(Boolean).slice(0, 2).map((word) => word[0]).join('');
      const media = project.image
        ? `<img src="${project.image}" alt="" loading="lazy">`
        : `<span aria-hidden="true">${escapeHtml(initials)}</span>`;
      return `
      <button class="project reveal" type="button" data-index="${index}" data-tags="${project.tags.join(',')}" aria-haspopup="dialog">
        <div class="project__img${project.image ? '' : ' project__img--empty'}">
          ${media}
          ${project.badge ? `<span class="project__badge">${escapeHtml(project.badge)}</span>` : ''}
        </div>
        <div class="project__body">
          <span class="project__context">${escapeHtml(project.context)}</span>
          <h3 class="project__title">${escapeHtml(project.title)}</h3>
          <p class="project__summary">${escapeHtml(project.summary)}</p>
          <span class="project__more">Lihat detail</span>
        </div>
      </button>`;
    })
    .join('');

  $('#project-filters').addEventListener('click', (event) => {
    const chip = event.target.closest('.chip');
    if (!chip) {
      return;
    }
    $$('.chip', $('#project-filters')).forEach((button) => {
      const isActive = button === chip;
      button.classList.toggle('is-active', isActive);
      button.setAttribute('aria-pressed', String(isActive));
    });
    const filter = chip.dataset.filter;
    $$('.project').forEach((card) => {
      card.hidden = filter !== 'all' && !card.dataset.tags.split(',').includes(filter);
      card.classList.add('is-visible');
    });
  });

  $('#project-grid').addEventListener('click', (event) => {
    const card = event.target.closest('.project');
    if (card) {
      openProject(data.projects[Number(card.dataset.index)]);
    }
  });

  /* ---------- Modal (project detail + image viewer) ---------- */
  const modal = $('#modal');
  const modalBody = $('#modal-body');

  function showModal(html, variant) {
    modalBody.innerHTML = html;
    modal.classList.toggle('modal--image', variant === 'image');
    if (typeof modal.showModal === 'function') {
      modal.showModal();
    } else {
      modal.setAttribute('open', '');
    }
    modal.scrollTop = 0;
  }

  function openProject(project) {
    const gallery = (project.gallery || []).length
      ? `<div class="modal__gallery">${project.gallery.map((src) => `<img src="${src}" alt="" loading="lazy">`).join('')}</div>`
      : '';
    const links = project.links.length
      ? `<div class="modal__links">${project.links
          .map((link) => `<a class="btn btn--solid" href="${link.url}" target="_blank" rel="noopener">${escapeHtml(link.label)} ↗</a>`)
          .join('')}</div>`
      : '';
    showModal(`
      ${project.image ? `<img class="modal__hero" src="${project.image}" alt="">` : ''}
      <div class="modal__content">
        <p class="eyebrow">${escapeHtml(project.context)}</p>
        <h3 id="modal-title">${escapeHtml(project.title)}</h3>
        ${project.badge ? `<span class="tag">${escapeHtml(project.badge)}</span>` : ''}
        <p>${escapeHtml(project.summary)}</p>
        <ul>${project.points.map((point) => `<li>${escapeHtml(point)}</li>`).join('')}</ul>
        ${gallery}
        <ul class="modal__stack" aria-label="Teknologi">${project.stack.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>
        ${links}
      </div>`);
  }

  function openImage(src, caption) {
    showModal(
      `<div class="modal__content">
        <img src="${src}" alt="${escapeHtml(caption)}">
        <p class="modal__caption" id="modal-title">${escapeHtml(caption)}</p>
      </div>`,
      'image'
    );
  }

  function closeModal() {
    if (typeof modal.close === 'function') {
      modal.close();
    } else {
      modal.removeAttribute('open');
    }
  }

  $('#modal-close').addEventListener('click', closeModal);
  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });
  $$('.edu__images img').forEach((img) => {
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', () => openImage(img.src, img.alt));
  });

  /* ---------- Certifications + search ---------- */
  const certList = $('#cert-list');
  const certCount = $('#cert-count');

  function highlight(text, query) {
    const safe = escapeHtml(text);
    if (!query) {
      return safe;
    }
    const pattern = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'ig');
    return safe.replace(pattern, '<mark>$1</mark>');
  }

  function renderCertifications(query = '') {
    const normalized = query.trim().toLowerCase();
    const matches = data.certifications.filter((cert) => `${cert.name} ${cert.issuer}`.toLowerCase().includes(normalized));
    certList.innerHTML = matches.length
      ? matches
          .map((cert) => {
            const inner = `
              <span class="cert__name">${highlight(cert.name, normalized)}</span>
              <span class="cert__issuer">${highlight(cert.issuer, normalized)}</span>
              ${cert.url ? '<span class="cert__verify">Verifikasi di Credly ↗</span>' : ''}`;
            return `<li class="cert">${cert.url ? `<a href="${cert.url}" target="_blank" rel="noopener">${inner}</a>` : `<div>${inner}</div>`}</li>`;
          })
          .join('')
      : '<li class="certs__empty">Tidak ada sertifikasi yang cocok dengan pencarian.</li>';
    certCount.textContent = `${matches.length} dari ${data.certifications.length} sertifikasi`;
  }

  renderCertifications();
  $('#cert-search').addEventListener('input', (event) => renderCertifications(event.target.value));

  /* ---------- Typing effect ---------- */
  const typed = $('#typed');
  if (!prefersReducedMotion) {
    let roleIndex = 0;
    let charIndex = data.roles[0].length;
    let deleting = true;
    const tick = () => {
      const role = data.roles[roleIndex];
      charIndex += deleting ? -1 : 1;
      typed.textContent = role.slice(0, charIndex);
      let delay = deleting ? 45 : 90;
      if (!deleting && charIndex === role.length) {
        deleting = true;
        delay = 1800;
      } else if (deleting && charIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % data.roles.length;
        delay = 300;
      }
      setTimeout(tick, delay);
    };
    setTimeout(tick, 2200);
  }

  /* ---------- Hero parallax shadow ---------- */
  const heroWord = $('.hero__word');
  if (!prefersReducedMotion && window.matchMedia('(pointer: fine)').matches) {
    $('.hero').addEventListener('pointermove', (event) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 6;
      const y = (event.clientY / window.innerHeight - 0.5) * 14;
      heroWord.style.setProperty('--sx', `${x}%`);
      heroWord.style.setProperty('--sy', `${y}%`);
    });
  }

  /* ---------- Reveal on scroll + counters ---------- */
  function animateCount(element) {
    const target = Number(element.dataset.count);
    const decimals = Number(element.dataset.decimals);
    const prefix = element.dataset.prefix;
    if (prefersReducedMotion) {
      return;
    }
    const start = performance.now();
    const duration = 1400;
    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      element.textContent = prefix + (target * eased).toFixed(decimals);
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }
        entry.target.classList.add('is-visible');
        const counter = $('[data-count]', entry.target);
        if (counter) {
          animateCount(counter);
        }
        revealObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );
  $$('.reveal').forEach((element) => revealObserver.observe(element));

  /* ---------- Nav: scroll state, progress, scrollspy, mobile menu ---------- */
  const nav = $('#nav');
  const progressBar = $('#progress-bar');
  const onScroll = () => {
    nav.classList.toggle('is-scrolled', window.scrollY > 20);
    const max = document.documentElement.scrollHeight - window.innerHeight;
    progressBar.style.width = `${max > 0 ? (window.scrollY / max) * 100 : 0}%`;
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  const navLinks = $$('.nav__links a');
  const spyObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach((link) => link.classList.toggle('is-active', link.getAttribute('href') === `#${entry.target.id}`));
        }
      });
    },
    { rootMargin: '-45% 0px -50% 0px' }
  );
  $$('main section[id]').forEach((section) => spyObserver.observe(section));

  const navToggle = $('#nav-toggle');
  const navList = $('#nav-links');
  const setMenu = (open) => {
    navList.classList.toggle('is-open', open);
    navToggle.setAttribute('aria-expanded', String(open));
    navToggle.setAttribute('aria-label', open ? 'Tutup menu' : 'Buka menu');
  };
  navToggle.addEventListener('click', () => setMenu(!navList.classList.contains('is-open')));
  navLinks.forEach((link) => link.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      setMenu(false);
    }
  });

  /* ---------- Theme toggle ---------- */
  $('#theme-toggle').addEventListener('click', () => {
    const root = document.documentElement;
    const current = root.dataset.theme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    const next = current === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    try {
      localStorage.setItem('theme', next);
    } catch (error) {
      /* storage unavailable: theme still applies for this visit */
    }
  });

  /* ---------- Copy email + toast ---------- */
  const toast = $('#toast');
  let toastTimer;
  const showToast = (message) => {
    toast.textContent = message;
    toast.classList.add('is-visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('is-visible'), 2200);
  };
  $('#copy-email').addEventListener('click', async (event) => {
    const email = event.currentTarget.dataset.email;
    try {
      await navigator.clipboard.writeText(email);
      showToast('Email disalin ke clipboard');
    } catch (error) {
      showToast(email);
    }
  });

  $('#year').textContent = new Date().getFullYear();
})();
