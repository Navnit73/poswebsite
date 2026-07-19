// ---- Partial loader: injects header.html / footor.html into any page ----
async function loadPartial(selector, url) {
  const host = document.querySelector(selector);
  if (!host) return;
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("Failed to load " + url);
    host.innerHTML = await res.text();
  } catch (err) {
    console.error(err);
  }
}

function initHeader() {
  const toggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("mobile-menu");
  const iconOpen = document.getElementById("icon-open");
  const iconClose = document.getElementById("icon-close");
  if (!toggle || !menu) return;

  toggle.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("hidden") === false;
    toggle.setAttribute("aria-expanded", String(isOpen));
    iconOpen.classList.toggle("hidden", isOpen);
    iconClose.classList.toggle("hidden", !isOpen);
  });

  // Highlight the current page in the nav
  const here = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll('nav a[href]').forEach((a) => {
    const target = a.getAttribute("href").split("/").pop();
    if (target === here) {
      a.classList.add("text-brand-deep", "font-semibold");
    }
  });
}

function initFooter() {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}

// ---- Count-up animation for stat numbers: <span data-count-to="98"> ----
function initCountUp() {
  const targets = document.querySelectorAll("[data-count-to]");
  if (!targets.length) return;

  const animate = (el) => {
    const to = parseFloat(el.dataset.countTo);
    const suffix = el.dataset.suffix || "";
    const decimals = el.dataset.countTo.includes(".") ? 1 : 0;
    const duration = 1200;
    const start = performance.now();

    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = (to * eased).toFixed(decimals) + suffix;
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animate(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );
  targets.forEach((t) => observer.observe(t));
}

// ---- Scroll-reveal for elements with [data-reveal] ----
function initReveal() {
  const items = document.querySelectorAll("[data-reveal]");
  if (!items.length) return;
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  items.forEach((el) => observer.observe(el));
}

// ---- FAQ accordion ----
function initFaq() {
  document.querySelectorAll("[data-faq-item]").forEach((item) => {
    const btn = item.querySelector("[data-faq-trigger]");
    const panel = item.querySelector("[data-faq-panel]");
    const icon = item.querySelector("[data-faq-icon]");
    if (!btn || !panel) return;
    btn.addEventListener("click", () => {
      const isOpen = !panel.classList.contains("hidden");
      document.querySelectorAll("[data-faq-panel]").forEach((p) => p.classList.add("hidden"));
      document.querySelectorAll("[data-faq-icon]").forEach((i) => i.classList.remove("rotate-45"));
      document.querySelectorAll("[data-faq-trigger]").forEach((b) => b.setAttribute("aria-expanded", "false"));
      if (!isOpen) {
        panel.classList.remove("hidden");
        icon && icon.classList.add("rotate-45");
        btn.setAttribute("aria-expanded", "true");
      }
    });
  });
}

// ---- Pricing monthly/annual toggle ----
function initPricingToggle() {
  const toggle = document.getElementById("billing-toggle");
  if (!toggle) return;
  const monthlyEls = document.querySelectorAll("[data-price-monthly]");
  const annualEls = document.querySelectorAll("[data-price-annual]");
  toggle.addEventListener("change", () => {
    const annual = toggle.checked;
    monthlyEls.forEach((el) => el.classList.toggle("hidden", annual));
    annualEls.forEach((el) => el.classList.toggle("hidden", !annual));
  });
}

document.addEventListener("DOMContentLoaded", async () => {
  const isInPages = location.pathname.includes("/pages/");
  const headerUrl = isInPages ? "header.html" : "pages/header.html";
  const footerUrl = isInPages ? "footor.html" : "pages/footor.html";
  await loadPartial("#site-header", headerUrl);
  await loadPartial("#site-footer", footerUrl);
  initHeader();
  initFooter();
  initCountUp();
  initReveal();
  initFaq();
  initPricingToggle();
});