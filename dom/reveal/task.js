const revealBlocks = Array.from(document.getElementsByClassName('reveal'));

window.addEventListener('scroll', () => {
  console.log('scroll');
  for (let index = 0; index < revealBlocks.length; index++) {
    let { top, bottom } = revealBlocks[index].getBoundingClientRect();
    if (bottom > 0 && top < window.innerHeight) {
      revealBlocks[index].classList.add('reveal_active');
    }
  }
});

console.log(revealBlocks);