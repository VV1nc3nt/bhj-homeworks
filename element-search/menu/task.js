const menuLinks = Array.from(document.getElementsByClassName('menu__link'));

menuLinks.forEach(element => element.addEventListener('click', (e) => {
  if (element.parentElement.querySelector('.menu_sub')) {
    element.parentElement.querySelector('.menu_sub').classList.toggle('menu_active');
    e.preventDefault();
  }
}));
