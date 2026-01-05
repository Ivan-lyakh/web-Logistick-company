let leftBtn = document.querySelector ('.leftBtn')
let centrBtn = document.querySelector ('.centrBtn')
let rightBtn = document.querySelector ('.rightBtn')

let textForChange = document.querySelector ('.text-for-change')


leftBtn.addEventListener("click" , function (){
  centrBtn.classList.remove('orange__button')
  rightBtn.classList.remove('orange__button')
  leftBtn.classList.add('orange__button')
  textForChange.textContent = "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem quia voluptassit."
})

centrBtn.addEventListener("click" , function (){
  centrBtn.classList.add('orange__button')
  rightBtn.classList.remove('orange__button')
  leftBtn.classList.remove('orange__button')
  textForChange.textContent = "We build our approach on a clear understanding of business goals and real user needs. Every decision is guided by research, experience, and a commitment to delivering practical solutions that create measurable and lasting value."
})


rightBtn.addEventListener("click" , function (){
  centrBtn.classList.remove('orange__button')
  rightBtn.classList.add('orange__button')
  leftBtn.classList.remove('orange__button')
  textForChange.textContent = "Our team operates with a strong focus on transparency, responsibility, and strategic thinking. We analyze each challenge within the broader business context to create solutions that meet current goals and support sustainable long-term growth."
})