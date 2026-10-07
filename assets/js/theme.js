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

/* ── Crosshair cursor and pointer-reactive background ── */
(function () {
  const ch = document.getElementById('crosshair');
  let glow = document.getElementById('mouse-glow');

  if (!glow) {
    glow = document.createElement('div');
    glow.id = 'mouse-glow';
    glow.setAttribute('aria-hidden', 'true');
    document.body.appendChild(glow);
  }

  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const followBackground = !reduceMotion.matches;
  let x = window.innerWidth / 2;
  let y = window.innerHeight / 2;
  let frame = 0;

  function render() {
    if (ch) {
      ch.style.left = x + 'px';
      ch.style.top = y + 'px';
    }
    if (glow && followBackground) {
      glow.style.left = x + 'px';
      glow.style.top = y + 'px';
    }
    frame = 0;
  }

  function queueRender() {
    if (!frame) frame = requestAnimationFrame(render);
  }

  if (ch && finePointer.matches) {
    document.body.classList.add('has-custom-cursor');
    render();
  }

  if (followBackground) {
    document.addEventListener('mousemove', e => {
      x = e.clientX;
      y = e.clientY;
      document.body.classList.add('has-pointer');
      queueRender();
    }, { passive: true });

    document.documentElement.addEventListener('mouseleave', () => {
      document.body.classList.remove('has-pointer');
    });
  } else if (ch) {
    document.addEventListener('mousemove', e => {
      x = e.clientX;
      y = e.clientY;
      queueRender();
    }, { passive: true });
  }

  if (ch) {
    document.addEventListener('mousedown', () => ch.classList.add('clicking'));
    document.addEventListener('mouseup', () => ch.classList.remove('clicking'));
  }
})();

/* ── Smooth scroll ── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const t = document.querySelector(a.getAttribute('href'));
    if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth' }); }
  });
});
