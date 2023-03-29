const dropList = Array.from(document.getElementsByClassName('dropdown__list'));
const dropValue = Array.from(document.getElementsByClassName('dropdown__value'));
const dropItem = Array.from(document.getElementsByClassName('dropdown__item'));

dropValue.forEach(element => element.addEventListener('click', () => {
  dropList.forEach(element => element.classList.toggle('dropdown__list_active'));
  dropItem.forEach(element => element.addEventListener('click', (e) => {
    dropValue[0].textContent = element.textContent;
    dropList.forEach(element => element.classList.remove('dropdown__list_active'));
    e.preventDefault();
  }));
}));
