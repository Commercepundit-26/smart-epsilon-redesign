/* Smart Epsilon Interactive Features Script */
document.addEventListener("DOMContentLoaded", function () {
  // 1. Tabbed Modules
  const tabBtns = document.querySelectorAll(".tab-btn");
  const tabContents = document.querySelectorAll(".tab-content");

  tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetTab = btn.getAttribute("data-tab");

      tabBtns.forEach((b) => b.classList.remove("active"));
      tabContents.forEach((c) => c.classList.remove("active"));

      btn.classList.add("active");
      const targetElement = document.getElementById(targetTab);
      if (targetElement) {
        targetElement.classList.add("active");
      }
    });
  });

  // 2. Accordions
  const accordionHeaders = document.querySelectorAll(".accordion-header");

  accordionHeaders.forEach((header) => {
    header.addEventListener("click", () => {
      const parentItem = header.parentElement;
      const isActive = parentItem.classList.contains("active");

      // Close all accordion items
      document.querySelectorAll(".accordion-item").forEach((item) => {
        item.classList.remove("active");
      });

      // Toggle clicked item
      if (!isActive) {
        parentItem.classList.add("active");
      }
    });
  });

  // 3. Demo Form Submission Mock
  const demoForms = document.querySelectorAll(".demo-form");
  demoForms.forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const btn = form.querySelector("button[type='submit']");
      if (btn) {
        btn.style.background = "#0D9488";
        btn.innerHTML = '<i class="ti ti-check" style="font-size:18px;"></i> Session Requested! We\'ll reply in 1 business day.';
      }
    });
  });
});
