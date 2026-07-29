// document.addEventListener('DOMContentLoaded', () => { 
//   const accItems = document.querySelectorAll('.acc-item');
//   const accContents = document.querySelectorAll('.acc-content');

//   accItems.forEach((item, index) => {
//     item.addEventListener('click', () => {
//       const content = accContents[index];
//       const isActive = item.classList.contains('active');

//       // Close all items
//       accItems.forEach(i => i.classList.remove('active'));
//       accContents.forEach(c => c.style.height = '0px');

//       // Open the clicked item if it was not active
//       if (!isActive) {
//         item.classList.add('active');
//         content.style.height = content.scrollHeight + 'px';
//       }
//     });
//   });
// });


document.addEventListener('DOMContentLoaded', () => {

  // Remove noscript
  document.querySelectorAll('.accordion-vibe noscript').forEach(el => el.remove());

  const items = document.querySelectorAll('.accordion-vibe .acc-item');

  function getHeight(content) {
    content.style.height = 'auto';
    const height = content.scrollHeight;
    content.style.height = '0px';
    return height;
  }

  function closeAll() {
    items.forEach(i => {
      i.classList.remove('active');
      const c = i.nextElementSibling;

      // Set current height first
      c.style.height = c.scrollHeight + 'px';

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          c.style.height = '0px';
        });
      });
    });
  }

  items.forEach(item => {
    const content = item.nextElementSibling;

    content.style.height = '0px';

    item.addEventListener('click', () => {
      const isOpen = item.classList.contains('active');

      closeAll();

      if (!isOpen) {
        item.classList.add('active');

        const finalHeight = getHeight(content);

        // Step 1: start from 0
        content.style.height = '0px';

        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            content.style.height = finalHeight + 'px';
          });
        });
      }
    });
  });

  function openDefault() {
    document.querySelectorAll('.acc-item.active').forEach(item => {
      const content = item.nextElementSibling;

      const finalHeight = getHeight(content);

      content.style.height = '0px';

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          content.style.height = finalHeight + 'px';
        });
      });
    });
  }

  window.addEventListener('load', openDefault);

  // Handle lazy images
  document.querySelectorAll('.accordion-vibe img').forEach(img => {
    img.addEventListener('load', openDefault);
  });

  setTimeout(openDefault, 800);
});