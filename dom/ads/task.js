const rotateList = Array.from(document.getElementsByClassName('rotator__case'));
let rotateIndex = 0;

function rotate() {
  if (rotateIndex < rotateList.length - 1) {
    rotateList[rotateIndex].classList.remove('rotator__case_active');
    rotateList[rotateIndex + 1].classList.add('rotator__case_active');
    rotateIndex += 1;
  } else {
    rotateList[rotateIndex].classList.remove('rotator__case_active');
    rotateIndex = 0;
    rotateList[rotateIndex].classList.add('rotator__case_active');
  }
}

setInterval(rotate, 1000);
