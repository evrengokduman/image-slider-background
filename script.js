const body = document.body
const slides = document.querySelectorAll('.slide')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')

let activeSlide = 0 // 0, 1, 2, 3

rightBtn.addEventListener('click', () => {
  activeSlide++
  console.log(activeSlide)
  if (activeSlide > slides.length - 1) {
    activeSlide = 0
  }
  setBgToBody()
  setActiveSlide()
})

leftBtn.addEventListener('click', () => {
  activeSlide--
  if (activeSlide < 0) {
    activeSlide = slides.length - 1
  }
  setBgToBody()
  setActiveSlide()
})
setBgToBody()
setActiveSlide()

function setBgToBody() {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage
}

function setActiveSlide() {
  slides.forEach((slide) => slide.classList.remove('active')) // remove active class from all slides

  slides[activeSlide].classList.add('active') // add active class to the current slide
}
