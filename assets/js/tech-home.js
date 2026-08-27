(() => {
  "use strict";

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function setupReveal() {
    const items = document.querySelectorAll("[data-reveal]");
    items.forEach((item) => {
      const delay = Number(item.dataset.revealDelay || 0);
      item.style.setProperty("--reveal-delay", `${delay}ms`);
    });
    if (reducedMotion || !("IntersectionObserver" in window)) {
      items.forEach((item) => item.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -6%" });
    items.forEach((item) => observer.observe(item));
  }

  function setupTilt() {
    if (reducedMotion || !window.matchMedia("(pointer:fine)").matches) return;
    document.querySelectorAll("[data-tilt]").forEach((card) => {
      card.addEventListener("pointermove", (event) => {
        const rect = card.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width;
        const y = (event.clientY - rect.top) / rect.height;
        card.style.setProperty("--ry", `${(x - 0.5) * 8}deg`);
        card.style.setProperty("--rx", `${(0.5 - y) * 7}deg`);
        card.style.setProperty("--mx", `${x * 100}%`);
        card.style.setProperty("--my", `${y * 100}%`);
      });
      card.addEventListener("pointerleave", () => {
        card.style.setProperty("--ry", "0deg");
        card.style.setProperty("--rx", "0deg");
      });
    });
  }

  function setupCursorGlow() {
    if (reducedMotion || !window.matchMedia("(pointer:fine)").matches) return;
    const glow = document.createElement("div");
    glow.className = "tech-cursor-glow";
    glow.setAttribute("aria-hidden", "true");
    document.body.appendChild(glow);
    let x = -500;
    let y = -500;
    let tx = x;
    let ty = y;
    window.addEventListener("pointermove", (event) => { tx = event.clientX; ty = event.clientY; }, { passive: true });
    const move = () => {
      x += (tx - x) * 0.12;
      y += (ty - y) * 0.12;
      glow.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      requestAnimationFrame(move);
    };
    requestAnimationFrame(move);
  }

  function setupDock() {
    const dock = document.querySelector("#navbar-main");
    if (!dock || reducedMotion || !window.matchMedia("(pointer:fine)").matches) return;
    const links = [...dock.querySelectorAll(".nav-link")];
    dock.addEventListener("pointermove", (event) => {
      links.forEach((link) => {
        const rect = link.getBoundingClientRect();
        const center = rect.left + rect.width / 2;
        const distance = Math.abs(event.clientX - center);
        const influence = Math.max(0, 1 - distance / 135);
        link.style.setProperty("--dock-scale", (1 + influence * 0.08).toFixed(3));
        link.style.setProperty("--dock-lift", `${(-influence * 2.5).toFixed(1)}px`);
      });
    });
    dock.addEventListener("pointerleave", () => {
      links.forEach((link) => {
        link.style.setProperty("--dock-scale", "1");
        link.style.setProperty("--dock-lift", "0px");
      });
    });
  }

  function setupActiveNavigation() {
    const links = [...document.querySelectorAll("#navbar-main a[data-target]")];
    const map = new Map();
    links.forEach((link) => {
      const selector = link.dataset.target;
      const section = selector ? document.querySelector(selector) : null;
      if (section) map.set(section, link);
    });
    if (!("IntersectionObserver" in window) || !map.size) return;
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      links.forEach((link) => link.classList.remove("is-section-active"));
      map.get(visible.target)?.classList.add("is-section-active");
    }, { rootMargin: "-28% 0px -58%", threshold: [0, 0.1, 0.3] });
    map.forEach((_, section) => observer.observe(section));
  }

  function setupHeroField() {
    const canvas = document.querySelector("#tech-field");
    const hero = document.querySelector(".tech-hero");
    if (!canvas || !hero) return;
    const context = canvas.getContext("2d", { alpha: true });
    if (!context) return;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let particles = [];
    let frame = 0;
    let running = true;
    const pointer = { x: 0.66, y: 0.46, active: false };

    function resize() {
      const rect = hero.getBoundingClientRect();
      width = Math.max(1, rect.width);
      height = Math.max(1, rect.height);
      dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(118, Math.max(58, Math.round(width / 12)));
      particles = Array.from({ length: count }, (_, index) => {
        const sideBias = index / count;
        return {
          x: Math.random() * width,
          y: height * (0.18 + Math.random() * 0.68),
          vx: (Math.random() - 0.5) * 0.14,
          vy: (Math.random() - 0.5) * 0.11,
          r: 0.45 + Math.random() * 1.15,
          phase: Math.random() * Math.PI * 2,
          band: Math.sin(sideBias * Math.PI) * 0.7 + 0.3,
        };
      });
      draw(0);
    }

    function draw(time) {
      context.clearRect(0, 0, width, height);
      const px = pointer.x * width;
      const py = pointer.y * height;
      const glow = context.createRadialGradient(px, py, 0, px, py, Math.max(width, height) * 0.35);
      glow.addColorStop(0, "rgba(130, 92, 255, 0.10)");
      glow.addColorStop(0.42, "rgba(65, 187, 255, 0.045)");
      glow.addColorStop(1, "rgba(0, 0, 0, 0)");
      context.fillStyle = glow;
      context.fillRect(0, 0, width, height);

      context.save();
      context.globalCompositeOperation = "screen";
      for (let i = 0; i < particles.length; i += 1) {
        const p = particles[i];
        if (!reducedMotion) {
          p.x += p.vx + Math.sin(time * 0.00016 + p.phase) * 0.035;
          p.y += p.vy + Math.cos(time * 0.00014 + p.phase) * 0.025;
          if (p.x < -30) p.x = width + 30;
          if (p.x > width + 30) p.x = -30;
          if (p.y < height * 0.1) p.y = height * 0.86;
          if (p.y > height * 0.9) p.y = height * 0.14;
          if (pointer.active) {
            const dx = p.x - px;
            const dy = p.y - py;
            const dist = Math.hypot(dx, dy) || 1;
            if (dist < 150) {
              const force = (1 - dist / 150) * 0.12;
              p.x += (dx / dist) * force;
              p.y += (dy / dist) * force;
            }
          }
        }
        for (let j = i + 1; j < particles.length; j += 1) {
          const q = particles[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const distance = Math.hypot(dx, dy);
          if (distance < 92) {
            const alpha = (1 - distance / 92) * 0.13 * Math.min(p.band, q.band);
            context.strokeStyle = `rgba(109, 190, 255, ${alpha})`;
            context.lineWidth = 0.55;
            context.beginPath();
            context.moveTo(p.x, p.y);
            context.lineTo(q.x, q.y);
            context.stroke();
          }
        }
        const shimmer = 0.45 + Math.sin(time * 0.0012 + p.phase) * 0.3;
        context.fillStyle = `rgba(${p.x > width * 0.55 ? "157,124,255" : "98,232,255"}, ${Math.max(0.12, shimmer)})`;
        context.beginPath();
        context.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        context.fill();
      }
      context.restore();

      context.save();
      context.translate(width * 0.7, height * 0.47);
      context.rotate(-0.08);
      for (let i = 0; i < 4; i += 1) {
        context.strokeStyle = `rgba(125, 102, 255, ${0.055 - i * 0.008})`;
        context.lineWidth = 1;
        context.beginPath();
        context.ellipse(0, 0, width * (0.17 + i * 0.035), height * (0.1 + i * 0.018), 0, 0, Math.PI * 2);
        context.stroke();
      }
      context.restore();
    }

    function animate(time) {
      draw(time);
      if (running && !reducedMotion) frame = requestAnimationFrame(animate);
    }

    hero.addEventListener("pointermove", (event) => {
      const rect = hero.getBoundingClientRect();
      pointer.x = (event.clientX - rect.left) / rect.width;
      pointer.y = (event.clientY - rect.top) / rect.height;
      pointer.active = true;
    }, { passive: true });
    hero.addEventListener("pointerleave", () => { pointer.active = false; });
    window.addEventListener("resize", resize, { passive: true });

    if ("IntersectionObserver" in window) {
      new IntersectionObserver(([entry]) => {
        running = entry.isIntersecting;
        cancelAnimationFrame(frame);
        if (running && !reducedMotion) frame = requestAnimationFrame(animate);
      }, { threshold: 0.02 }).observe(hero);
    }

    resize();
    if (!reducedMotion) frame = requestAnimationFrame(animate);
  }

  function setupGallery() {
    const root = document.querySelector("[data-tech-gallery]");
    if (!root) return;
    const rail = root.querySelector(".tech-gallery-rail");
    const cards = [...root.querySelectorAll("[data-gallery-card]")];
    const previous = root.querySelector("[data-gallery-prev]");
    const next = root.querySelector("[data-gallery-next]");
    const current = root.querySelector("[data-gallery-current]");
    const lightbox = root.querySelector("[data-gallery-lightbox]");
    const lightboxImage = root.querySelector("[data-gallery-lightbox-image]");
    const lightboxCaption = root.querySelector("[data-gallery-lightbox-caption]");
    const close = root.querySelector("[data-gallery-close]");
    if (!rail || !cards.length) return;

    let active = Math.min(1, cards.length - 1);
    let dragStart = null;
    let idleTimer = 0;
    let idlePaused = false;

    const wrappedDifference = (index) => {
      let difference = index - active;
      const half = cards.length / 2;
      if (difference > half) difference -= cards.length;
      if (difference < -half) difference += cards.length;
      return difference;
    };

    const render = () => {
      const narrow = root.getBoundingClientRect().width < 700;
      const spacing = narrow ? 100 : 142;
      cards.forEach((card, index) => {
        const difference = wrappedDifference(index);
        const distance = Math.abs(difference);
        const visible = distance <= (narrow ? 3 : 5);
        card.hidden = !visible;
        card.classList.toggle("is-active", difference === 0);
        card.setAttribute("aria-selected", String(difference === 0));
        card.tabIndex = difference === 0 ? 0 : -1;
        if (!visible) return;
        const direction = Math.sign(difference);
        const x = difference * spacing;
        const y = -50 + distance * 1.8;
        const z = -distance * (narrow ? 105 : 125);
        const rotate = -direction * Math.min(21, distance * 7.5);
        const scale = Math.max(0.62, 1 - distance * 0.075);
        const opacity = Math.max(0.12, 1 - distance * 0.16);
        card.style.setProperty("--gallery-x", `${x}px`);
        card.style.setProperty("--gallery-y", `${y}%`);
        card.style.setProperty("--gallery-z", `${z}px`);
        card.style.setProperty("--gallery-rotate", `${rotate}deg`);
        card.style.setProperty("--gallery-scale", scale.toFixed(3));
        card.style.setProperty("--gallery-opacity", opacity.toFixed(3));
        card.style.setProperty("--gallery-layer", String(50 - distance));
      });
      if (current) current.textContent = String(active + 1).padStart(2, "0");
    };

    const select = (index, focus = false) => {
      active = (index + cards.length) % cards.length;
      render();
      if (focus) cards[active].focus({ preventScroll: true });
    };

    const openLightbox = (card) => {
      if (!lightbox || !lightboxImage) return;
      lightboxImage.src = card.dataset.galleryFull || "";
      lightboxImage.alt = card.dataset.galleryCaption || "Gallery image";
      if (lightboxCaption) lightboxCaption.textContent = card.dataset.galleryCaption || "";
      lightbox.classList.add("is-open");
      lightbox.setAttribute("aria-hidden", "false");
      document.body.classList.add("tech-gallery-open");
      close?.focus({ preventScroll: true });
    };

    const closeLightbox = () => {
      if (!lightbox) return;
      lightbox.classList.remove("is-open");
      lightbox.setAttribute("aria-hidden", "true");
      document.body.classList.remove("tech-gallery-open");
      cards[active]?.focus({ preventScroll: true });
    };

    cards.forEach((card, index) => {
      card.addEventListener("click", () => {
        if (index === active) openLightbox(card);
        else select(index);
      });
    });
    previous?.addEventListener("click", () => select(active - 1, true));
    next?.addEventListener("click", () => select(active + 1, true));
    close?.addEventListener("click", closeLightbox);
    lightbox?.addEventListener("click", (event) => { if (event.target === lightbox) closeLightbox(); });

    rail.addEventListener("keydown", (event) => {
      if (event.key === "ArrowLeft") { event.preventDefault(); select(active - 1, true); }
      if (event.key === "ArrowRight") { event.preventDefault(); select(active + 1, true); }
      if (event.key === "Enter" || event.key === " ") { event.preventDefault(); openLightbox(cards[active]); }
    });
    document.addEventListener("keydown", (event) => { if (event.key === "Escape" && lightbox?.classList.contains("is-open")) closeLightbox(); });

    rail.addEventListener("pointerdown", (event) => {
      dragStart = { x: event.clientX, id: event.pointerId };
      rail.setPointerCapture?.(event.pointerId);
    });
    rail.addEventListener("pointerup", (event) => {
      if (!dragStart || dragStart.id !== event.pointerId) return;
      const distance = event.clientX - dragStart.x;
      if (Math.abs(distance) > 38) select(active + (distance < 0 ? 1 : -1));
      dragStart = null;
    });
    rail.addEventListener("pointercancel", () => { dragStart = null; });

    const pause = () => { idlePaused = true; };
    const resume = () => { idlePaused = false; };
    root.addEventListener("pointerenter", pause);
    root.addEventListener("pointerleave", resume);
    root.addEventListener("focusin", pause);
    root.addEventListener("focusout", resume);
    if (!reducedMotion) {
      idleTimer = window.setInterval(() => { if (!idlePaused && !document.hidden) select(active + 1); }, 4200);
    }
    window.addEventListener("resize", render, { passive: true });
    window.addEventListener("pagehide", () => window.clearInterval(idleTimer), { once: true });
    render();
  }

  document.addEventListener("DOMContentLoaded", () => {
    setupReveal();
    setupTilt();
    setupCursorGlow();
    setupDock();
    setupActiveNavigation();
    setupHeroField();
    setupGallery();
  });
})();
