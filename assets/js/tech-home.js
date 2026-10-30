(() => {
  "use strict";

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* 1. Unify all built-in Hugo Blox section headers with numbered badges */
  function setupUnifiedSectionHeaders() {
    const sectionMeta = {
      news: { code: "02", label: "UPDATES" },
      featured: { code: "03", label: "PUBLICATIONS", subtitle: "Selected peer-reviewed research and technical contributions." },
      talks: { code: "04", label: "TALKS & POSTERS", subtitle: "Invited presentations and conference posters." },
      projects: { code: "05", label: "PROJECTS", subtitle: "Selected systems, simulation platforms, and engineering prototypes." },
      honors: { code: "06", label: "DISTINCTIONS", subtitle: "Academic scholarships, competition awards, and university honors." },
      service: { code: "07", label: "ACADEMIC SERVICE", subtitle: "Teaching assistantships, student leadership, and community service." },
      contact: { code: "09", label: "CONTACT", subtitle: "Get in touch for research collaboration, venture inquiries, or academic exchange." },
    };

    Object.entries(sectionMeta).forEach(([id, meta]) => {
      const section = document.getElementById(id);
      if (!section) return;
      const heading = section.querySelector(".section-heading");
      if (!heading || heading.querySelector(".bk-section-badge")) return;

      const badge = document.createElement("div");
      badge.className = "bk-section-badge";
      badge.innerHTML = `<b>${meta.code}</b> / ${meta.label}`;
      heading.insertBefore(badge, heading.firstChild);

      if (meta.subtitle && !heading.querySelector("p")) {
        const sub = document.createElement("p");
        sub.textContent = meta.subtitle;
        heading.appendChild(sub);
      }
    });
  }

  /* 2. Scroll reveal animations */
  function setupReveal() {
    const items = document.querySelectorAll("[data-reveal], .home-section .section-heading, .home-section .card, .home-section .media.stream-item, #projects .view-showcase");
    items.forEach((item) => {
      if (!item.hasAttribute("data-reveal")) {
        item.setAttribute("data-reveal", "");
      }
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
    }, { threshold: 0.08, rootMargin: "0px 0px -4%" });
    items.forEach((item) => observer.observe(item));
  }

  /* 3. Smooth spring-damped micro-tilt & cursor spotlight */
  function setupTilt() {
    if (reducedMotion || !window.matchMedia("(pointer:fine)").matches) return;
    const cards = document.querySelectorAll("[data-tilt], .bk-tech .card, .bk-tech .media.stream-item, .bk-tech #projects .view-showcase");

    cards.forEach((card) => {
      const isPortrait = card.classList.contains("tech-portrait-shell");
      const maxAngle = isPortrait ? 2.4 : 1.6;
      let targetRx = 0;
      let targetRy = 0;
      let currentRx = 0;
      let currentRy = 0;
      let rafId = 0;

      const update = () => {
        currentRx += (targetRx - currentRx) * 0.14;
        currentRy += (targetRy - currentRy) * 0.14;
        card.style.setProperty("--rx", `${currentRx.toFixed(3)}deg`);
        card.style.setProperty("--ry", `${currentRy.toFixed(3)}deg`);
        if (Math.abs(targetRx - currentRx) > 0.01 || Math.abs(targetRy - currentRy) > 0.01) {
          rafId = requestAnimationFrame(update);
        } else {
          rafId = 0;
        }
      };

      card.addEventListener("pointermove", (event) => {
        const rect = card.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width;
        const y = (event.clientY - rect.top) / rect.height;
        card.style.setProperty("--mx", `${(x * 100).toFixed(1)}%`);
        card.style.setProperty("--my", `${(y * 100).toFixed(1)}%`);
        if (card.hasAttribute("data-tilt")) {
          targetRy = (x - 0.5) * maxAngle * 2;
          targetRx = (0.5 - y) * maxAngle * 2;
          if (!rafId) rafId = requestAnimationFrame(update);
        }
      }, { passive: true });

      card.addEventListener("pointerleave", () => {
        if (card.hasAttribute("data-tilt")) {
          targetRx = 0;
          targetRy = 0;
          if (!rafId) rafId = requestAnimationFrame(update);
        }
      });
    });
  }

  /* 4. Subtle navbar dock hover response */
  function setupDock() {
    const dock = document.querySelector("#navbar-main");
    if (!dock || reducedMotion || !window.matchMedia("(pointer:fine)").matches) return;
    const links = [...dock.querySelectorAll(".nav-link")];
    dock.addEventListener("pointermove", (event) => {
      links.forEach((link) => {
        const rect = link.getBoundingClientRect();
        const center = rect.left + rect.width / 2;
        const distance = Math.abs(event.clientX - center);
        const influence = Math.max(0, 1 - distance / 120);
        link.style.setProperty("--dock-scale", (1 + influence * 0.04).toFixed(3));
        link.style.setProperty("--dock-lift", `${(-influence * 1.5).toFixed(1)}px`);
      });
    }, { passive: true });
    dock.addEventListener("pointerleave", () => {
      links.forEach((link) => {
        link.style.setProperty("--dock-scale", "1");
        link.style.setProperty("--dock-lift", "0px");
      });
    });
  }

  /* 5. Active section navigation highlighting */
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
    }, { rootMargin: "-25% 0px -55%", threshold: [0, 0.1, 0.25] });
    map.forEach((_, section) => observer.observe(section));
  }

  /* 6. Multi-depth ambient aurora & constellation field */
  function setupHeroField() {
    const canvas = document.querySelector("#tech-field");
    const hero = document.querySelector(".tech-hero");
    if (!canvas || !hero) return;
    const context = canvas.getContext("2d", { alpha: true });
    if (!context) return;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let nodes = [];
    let frame = 0;
    let running = true;
    const pointer = { x: 0.62, y: 0.45, tx: 0.62, ty: 0.45 };

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

      const count = Math.min(64, Math.max(36, Math.round(width / 22)));
      nodes = Array.from({ length: count }, (_, idx) => {
        const depth = 0.35 + (idx % 3) * 0.32; // 3 depth layers
        return {
          baseX: Math.random() * width,
          baseY: height * (0.1 + Math.random() * 0.8),
          vx: (Math.random() - 0.5) * 0.09 * depth,
          vy: (Math.random() - 0.5) * 0.07 * depth,
          r: (0.7 + Math.random() * 1.1) * depth,
          depth,
          phase: Math.random() * Math.PI * 2,
          hue: idx % 4 === 0 ? "154, 124, 255" : "98, 232, 255",
        };
      });
      draw(0);
    }

    function draw(time) {
      context.clearRect(0, 0, width, height);

      pointer.x += (pointer.tx - pointer.x) * 0.05;
      pointer.y += (pointer.ty - pointer.y) * 0.05;

      const px = pointer.x * width;
      const py = pointer.y * height;

      // Soft ambient aurora plumes
      const aura1 = context.createRadialGradient(px, py, 0, px, py, Math.max(width, height) * 0.42);
      aura1.addColorStop(0, "rgba(98, 232, 255, 0.07)");
      aura1.addColorStop(0.45, "rgba(130, 96, 255, 0.04)");
      aura1.addColorStop(1, "rgba(0, 0, 0, 0)");
      context.fillStyle = aura1;
      context.fillRect(0, 0, width, height);

      const driftX = width * (0.28 + Math.sin(time * 0.0002) * 0.05);
      const driftY = height * (0.52 + Math.cos(time * 0.00018) * 0.05);
      const aura2 = context.createRadialGradient(driftX, driftY, 0, driftX, driftY, Math.max(width, height) * 0.36);
      aura2.addColorStop(0, "rgba(98, 232, 255, 0.045)");
      aura2.addColorStop(1, "rgba(0, 0, 0, 0)");
      context.fillStyle = aura2;
      context.fillRect(0, 0, width, height);

      context.save();
      context.globalCompositeOperation = "screen";

      // Update positions with smooth parallax
      const parallaxX = (pointer.x - 0.5) * -28;
      const parallaxY = (pointer.y - 0.5) * -20;

      for (let i = 0; i < nodes.length; i += 1) {
        const n = nodes[i];
        if (!reducedMotion) {
          n.baseX += n.vx + Math.sin(time * 0.0002 + n.phase) * 0.04;
          n.baseY += n.vy + Math.cos(time * 0.00018 + n.phase) * 0.03;
          if (n.baseX < -40) n.baseX = width + 40;
          if (n.baseX > width + 40) n.baseX = -40;
          if (n.baseY < 0) n.baseY = height;
          if (n.baseY > height) n.baseY = 0;
        }
        n.x = n.baseX + parallaxX * n.depth;
        n.y = n.baseY + parallaxY * n.depth;
      }

      // Draw delicate filaments between nearby nodes of similar depth
      const maxDist = 115;
      for (let i = 0; i < nodes.length; i += 1) {
        const a = nodes[i];
        if (a.depth < 0.5) continue;
        for (let j = i + 1; j < nodes.length; j += 1) {
          const b = nodes[j];
          if (b.depth < 0.5) continue;
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist < maxDist) {
            const alpha = Math.pow(1 - dist / maxDist, 1.6) * 0.11 * Math.min(a.depth, b.depth);
            context.strokeStyle = `rgba(120, 200, 255, ${alpha.toFixed(3)})`;
            context.lineWidth = 0.6;
            context.beginPath();
            context.moveTo(a.x, a.y);
            context.lineTo(b.x, b.y);
            context.stroke();
          }
        }
      }

      // Draw soft glowing nodes
      for (let i = 0; i < nodes.length; i += 1) {
        const n = nodes[i];
        const pulse = 0.4 + Math.sin(time * 0.0014 + n.phase) * 0.25;
        const alpha = Math.max(0.12, pulse * n.depth);

        if (n.depth > 0.8) {
          context.fillStyle = `rgba(${n.hue}, ${(alpha * 0.22).toFixed(3)})`;
          context.beginPath();
          context.arc(n.x, n.y, n.r * 3.2, 0, Math.PI * 2);
          context.fill();
        }

        context.fillStyle = `rgba(${n.hue}, ${alpha.toFixed(3)})`;
        context.beginPath();
        context.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        context.fill();
      }

      context.restore();
    }

    function animate(time) {
      draw(time);
      if (running && !reducedMotion) frame = requestAnimationFrame(animate);
    }

    hero.addEventListener("pointermove", (event) => {
      const rect = hero.getBoundingClientRect();
      pointer.tx = (event.clientX - rect.left) / rect.width;
      pointer.ty = (event.clientY - rect.top) / rect.height;
    }, { passive: true });
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

  /* 7. Refined 5-card 3D Gallery with trackpad wheel & viewport-aware autoplay */
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

    let active = 0;
    let dragStart = null;
    let idleTimer = 0;
    let idlePaused = false;
    let inViewport = false;
    let wheelCooldown = 0;

    const wrappedDifference = (index) => {
      let difference = index - active;
      const half = cards.length / 2;
      if (difference > half) difference -= cards.length;
      if (difference < -half) difference += cards.length;
      return difference;
    };

    const render = () => {
      const narrow = root.getBoundingClientRect().width < 700;
      const spacing = narrow ? 125 : 195;
      const maxVisible = narrow ? 2 : 3;
      cards.forEach((card, index) => {
        const difference = wrappedDifference(index);
        const distance = Math.abs(difference);
        const visible = distance <= maxVisible;
        card.hidden = !visible;
        card.classList.toggle("is-active", difference === 0);
        card.setAttribute("aria-selected", String(difference === 0));
        card.tabIndex = difference === 0 ? 0 : -1;
        if (!visible) return;
        const direction = Math.sign(difference);
        const x = difference * spacing;
        const y = -50 + distance * 1.2;
        const z = -distance * (narrow ? 90 : 110);
        const rotate = -direction * Math.min(12, distance * 5.5);
        const scale = Math.max(0.72, 1 - distance * 0.085);
        const opacity = distance === 0 ? 1 : Math.max(0.18, 0.88 - (distance - 1) * 0.28);
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

    rail.addEventListener("wheel", (event) => {
      if (Math.abs(event.deltaX) > Math.abs(event.deltaY) && Math.abs(event.deltaX) > 12) {
        event.preventDefault();
        const now = Date.now();
        if (now - wheelCooldown > 260) {
          wheelCooldown = now;
          select(active + (event.deltaX > 0 ? 1 : -1));
        }
      }
    }, { passive: false });

    rail.addEventListener("pointerdown", (event) => {
      dragStart = { x: event.clientX, id: event.pointerId };
      rail.setPointerCapture?.(event.pointerId);
    });
    rail.addEventListener("pointerup", (event) => {
      if (!dragStart || dragStart.id !== event.pointerId) return;
      const distance = event.clientX - dragStart.x;
      if (Math.abs(distance) > 36) select(active + (distance < 0 ? 1 : -1));
      dragStart = null;
    });
    rail.addEventListener("pointercancel", () => { dragStart = null; });

    const pause = () => { idlePaused = true; };
    const resume = () => { idlePaused = false; };
    root.addEventListener("pointerenter", pause);
    root.addEventListener("pointerleave", resume);
    root.addEventListener("focusin", pause);
    root.addEventListener("focusout", resume);

    if ("IntersectionObserver" in window) {
      new IntersectionObserver(([entry]) => {
        inViewport = entry.isIntersecting;
      }, { threshold: 0.25 }).observe(root);
    }

    if (!reducedMotion) {
      idleTimer = window.setInterval(() => {
        if (inViewport && !idlePaused && !document.hidden) select(active + 1);
      }, 5500);
    }
    window.addEventListener("resize", render, { passive: true });
    window.addEventListener("pagehide", () => window.clearInterval(idleTimer), { once: true });
    render();
  }

  document.addEventListener("DOMContentLoaded", () => {
    setupUnifiedSectionHeaders();
    setupReveal();
    setupTilt();
    setupDock();
    setupActiveNavigation();
    setupHeroField();
    setupGallery();
  });
})();
