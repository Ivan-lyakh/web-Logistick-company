document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');

      document.querySelectorAll('.faq-item')
        .forEach(i => i.classList.remove('active'));

      item.classList.add('active');
    });
  });