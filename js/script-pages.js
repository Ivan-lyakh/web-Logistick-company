document.addEventListener('DOMContentLoaded', () => {
  const submenuItem = document.querySelector('.has-submenu');
  const pagesBtn = submenuItem.querySelector('.pages-btn');
  const burger = document.querySelector('.burger');
  const headerList = document.querySelector('.header__list');

  // Pages toggle
  pagesBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    submenuItem.classList.toggle('open');
  });

  submenuItem.addEventListener('click', (e) => {
    e.stopPropagation();
  });

  // click outside closes Pages
  document.addEventListener('click', () => {
    submenuItem.classList.remove('open');
  });

  // close Pages when burger closes
  burger.addEventListener('click', () => {
    if (!headerList.classList.contains('open')) {
      submenuItem.classList.remove('open');
    }
  });
});