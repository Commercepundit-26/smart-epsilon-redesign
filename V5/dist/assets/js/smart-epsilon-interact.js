/* Smart Epsilon Interactive Features & Canvas Particle System */
document.addEventListener("DOMContentLoaded", function () {
  // 1. Interactive Canvas Particle Background
  const canvas = document.getElementById("hero-canvas");
  if (canvas) {
    const ctx = canvas.getContext("2d");
    let particles = [];

    function resizeCanvas() {
      canvas.width = canvas.parentElement.clientWidth || window.innerWidth;
      canvas.height = canvas.parentElement.clientHeight || 500;
    }
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    class Particle {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = Math.random() * 2 + 1;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.alpha = Math.random() * 0.4 + 0.1;
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
          this.reset();
        }
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(107, 98, 172, ${this.alpha})`;
        ctx.fill();
      }
    }

    for (let i = 0; i < 40; i++) {
      particles.push(new Particle());
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(107, 98, 172, ${0.1 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }
      requestAnimationFrame(animate);
    }
    animate();
  }

  // 2. Tab Switcher Logic
  const tabBtns = document.querySelectorAll(".tab-trigger-btn");
  const tabPanels = document.querySelectorAll(".tab-panel-item");

  tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetId = btn.getAttribute("data-tab");

      tabBtns.forEach((b) => b.classList.remove("active"));
      tabPanels.forEach((p) => p.classList.remove("active"));

      btn.classList.add("active");
      const targetPanel = document.getElementById(targetId);
      if (targetPanel) {
        targetPanel.classList.add("active");
      }
    });
  });

  // 3. Accordion Toggle Logic
  const accordionHeaders = document.querySelectorAll(".accordion-card-header");
  accordionHeaders.forEach((header) => {
    header.addEventListener("click", () => {
      const parentCard = header.parentElement;
      const isActive = parentCard.classList.contains("active");

      document.querySelectorAll(".accordion-card").forEach((card) => {
        card.classList.remove("active");
      });

      if (!isActive) {
        parentCard.classList.add("active");
      }
    });
  });

  // 4. GSAP ScrollReveal Mock for .light-card & .eyebrow-pill
  if (window.gsap) {
    window.gsap.from(".light-card", {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.15,
      ease: "power2.out",
    });
  }
});
