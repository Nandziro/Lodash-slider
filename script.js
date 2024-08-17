//SLIDER

let sliderBox = document.querySelector('.slider')
let sliderInput = document.querySelector('.slider__input')

function changeSliderSize(event){
  let inputValue = event.target.value
  let sliderImage = document.querySelector('.slider__image')
  let newWidth = inputValue + "%"
  sliderImage.style.width = newWidth
}
let debounceSlider = _.debounce(changeSliderSize, 1)
sliderInput.addEventListener('input', debounceSlider)

