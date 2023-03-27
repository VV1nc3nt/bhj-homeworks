const modal_main = document.getElementById('modal_main');
const modal_close = Array.from(document.getElementsByClassName('modal__close'));
const modal_success = document.getElementById('modal_success');
const show_success = Array.from(document.getElementsByClassName('show-success'));

modal_main.classList.add('modal_active');

modal_close.forEach(element => element.addEventListener('click', () => {
  modal_main.classList.remove('modal_active');
  modal_success.style.display = 'none';
}));

show_success.forEach(element => element.addEventListener('click', () => {
  modal_main.classList.remove('modal_active');
  modal_success.style.display = 'flex';
}));