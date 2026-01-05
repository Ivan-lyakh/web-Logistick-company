const columns = document.querySelectorAll('.pricing__column');

columns.forEach(column => {
  const button = column.querySelector('.pricing__column__button');

  column.addEventListener('mouseenter', () => {
    columns.forEach(col => {
      col.classList.remove('blue__pricing');
      col.querySelector('.pricing__column__button')
        .classList.replace('yellow', 'blue');
    });

    column.classList.add('blue__pricing');
    button.classList.replace('blue', 'yellow');
  });
});