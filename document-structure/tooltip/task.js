const tooltipList = Array.from(document.getElementsByClassName('has-tooltip'));

tooltipList.forEach(element => element.addEventListener('click', (event) => {
  if (Array.from(element.children).length == 0) {
    let insertingElement = document.createElement('div');
    let coords = element.getBoundingClientRect();

    insertingElement.classList.add('tooltip', 'tooltip_active');
    insertingElement.innerHTML = tooltipList[tooltipList.indexOf(element)].getAttribute('title');
    insertingElement.style.left = coords.left + 'px';
    insertingElement.style.top = coords.bottom + 'px';

    element.insertAdjacentElement('beforeend', insertingElement);
  } else {
    element.children[0].remove();
  }
  event.preventDefault();
}));

document.addEventListener('scroll', () => {
  let tipsActiveList = Array.from(document.getElementsByClassName('tooltip_active'));
  tipsActiveList.forEach(element => element.remove());
});