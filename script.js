const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');
const copyBtn = document.getElementById('copyCode');
const copyState = document.getElementById('copyState');
const refCode = document.getElementById('refCode')?.textContent?.trim();

if (menuToggle && siteNav) {
  menuToggle.addEventListener('click', () => {
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!expanded));
    siteNav.classList.toggle('open');
  });
}

if (copyBtn && refCode) {
  copyBtn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(refCode);
      copyState.textContent = 'Copied';
      setTimeout(() => { copyState.textContent = ''; }, 1600);
    } catch {
      copyState.textContent = 'Copy failed';
    }
  });
}

document.querySelectorAll('.acc-btn').forEach((button) => {
  button.addEventListener('click', () => {
    const expanded = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', String(!expanded));
  });
});

document.querySelectorAll('[loading="lazy"]').forEach((el) => {
  if (!('IntersectionObserver' in window)) return;
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  observer.observe(el);
});
