let btnLeft = document.querySelector('.what-customer__button-left');
let btnRight = document.querySelector('.what-customer__button-right');

let leftColumn = document.querySelector('.what-customer__column__main__left');
let rightColumn = document.querySelector('.what-customer__column__main__right');

leftColumn.addEventListener('click' , function(){
  leftColumn.classList.add('blue__background')
  rightColumn.classList.remove('blue__background')
})

rightColumn.addEventListener('click' , function(){
  leftColumn.classList.remove('blue__background')
  rightColumn.classList.add('blue__background')
})

  btnLeft.addEventListener ("click" , function(){
    leftColumn.classList.add('blue__background')
    rightColumn.classList.remove('blue__background')
    btnLeft.classList.add('blue__background')
    btnRight.classList.remove('blue__background')
  })

    btnRight.addEventListener ("click" , function(){
    leftColumn.classList.remove('blue__background')
    rightColumn.classList.add('blue__background')
    btnLeft.classList.remove('blue__background')
    btnRight.classList.add('blue__background')
  })



