const form = document.querySelector('.contact-form');

if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    form.reset();
    alert('Спасибо. Ваше сообщение было успешно отправлено!');
  });
}

// ===== FOOTER FORM =====
const footerButton = document.querySelector('.form__button__email');
const inputForReset = document.querySelector('.footer__input');

if (footerButton && inputForReset) {
  footerButton.addEventListener("click", function () {
    if (inputForReset.value.trim() !== '') {
      inputForReset.value = '';
      alert('Спасибо. Ваше сообщение было успешно отправлено!');
    } else {
      alert('Поле не должно быть пустым!');
    }
  });
}
