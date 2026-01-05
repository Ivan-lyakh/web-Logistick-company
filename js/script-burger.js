const burger = document.querySelector('.burger');
const menu = document.querySelector('.header__list');
const body = document.body;

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  menu.classList.toggle('open');
  body.classList.toggle('lock');
});



