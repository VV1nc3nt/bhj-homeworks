const arrows = Array.from(document.getElementsByClassName('slider__arrow'));
const sliderItems = Array.from(document.getElementsByClassName('slider__item'));
const sliderDots = Array.from(document.getElementsByClassName('slider__dot'));
let slideIndex = 0; 

sliderDots[slideIndex].classList.toggle('slider__dot_active');

arrows.forEach(element => element.addEventListener('click', () => {
  if (element.classList.contains('slider__arrow_prev')) {
    if (sliderItems[slideIndex].classList.contains('slider__item_active')) {
      sliderItems[slideIndex].classList.toggle('slider__item_active');
      sliderDots[slideIndex].classList.toggle('slider__dot_active');
      if (slideIndex > 0) {
        sliderItems[slideIndex - 1].classList.toggle('slider__item_active');
        sliderDots[slideIndex - 1].classList.toggle('slider__dot_active');
        slideIndex -= 1;
      } else {
        slideIndex = sliderItems.length - 1;
        sliderItems[slideIndex].classList.toggle('slider__item_active');
        sliderDots[slideIndex].classList.toggle('slider__dot_active');
      }
    }
  } else {
    if (sliderItems[slideIndex].classList.contains('slider__item_active')) {
      sliderItems[slideIndex].classList.toggle('slider__item_active');sliderDots[slideIndex].classList.toggle('slider__dot_active');
      if (slideIndex < sliderItems.length - 1) {
        sliderItems[slideIndex + 1].classList.toggle('slider__item_active');
        sliderDots[slideIndex + 1].classList.toggle('slider__dot_active');
        slideIndex += 1;
      } else {
        slideIndex = 0;
        sliderItems[slideIndex].classList.toggle('slider__item_active');
        sliderDots[slideIndex].classList.toggle('slider__dot_active');
      }
    }
  }
}));
