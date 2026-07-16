/* ── Typing effect ── */
(function () {
  const words = ["Web Developer", "Devops", "Linux Explorer"];
  let wi = 0, ci = 0, deleting = false;
  const el = document.getElementById('typing');
  if (!el) return;
  function tick() {
    const word = words[wi];
    el.textContent = deleting ? word.slice(0, ci--) : word.slice(0, ci++);
    if (!deleting && ci > word.length) { deleting = true; setTimeout(tick, 1400); return; }
    if (deleting && ci < 0) { deleting = false; wi = (wi + 1) % words.length; ci = 0; }
    setTimeout(tick, deleting ? 55 : 80);
  }
  tick();
})();

/* ── Crosshair cursor ── */
(function () {
  const ch = document.getElementById('crosshair');
  if (!ch) return;
  document.addEventListener('mousemove', e => {
    ch.style.left = e.clientX + 'px';
    ch.style.top = e.clientY + 'px';
  });
  document.addEventListener('mousedown', () => ch.classList.add('clicking'));
  document.addEventListener('mouseup', () => ch.classList.remove('clicking'));
})();

/* ── Smooth scroll ── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const t = document.querySelector(a.getAttribute('href'));
    if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth' }); }
  });
});
