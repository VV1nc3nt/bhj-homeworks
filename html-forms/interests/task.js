const interestsActive = Array.from(document.getElementsByClassName('interests_active'));

function checkedElementOn(element) {
  if (element.checked == true) {
    return element;
  }
}

function checkedElementOff(element) {
  if (element.checked == false) {
    return element;
  }
}

function elementCheckOn(element) {
  return element.checked = true;
}

function elementCheckOff(element) {
  return element.checked = false;
}

for (let indexTop = 0; indexTop < interestsActive.length; indexTop++) {
  let checkedArray = Array.from(interestsActive[indexTop].querySelectorAll('input'));

  interestsActive[indexTop].parentElement.querySelector('input').addEventListener('change', () => {
    if (interestsActive[indexTop].parentElement.querySelector('input').checked == true) {
      checkedArray.forEach(element => elementCheckOn(element));
    } else if (interestsActive[indexTop].parentElement.querySelector('input').checked == false) {
      checkedArray.forEach(element => elementCheckOff(element));
    }
  });

  checkedArray.forEach(element => element.addEventListener('change', () => {
      if (checkedArray.every(checkedElementOn)) {
        interestsActive[indexTop].parentElement.querySelector('input').checked = true;
      } else if (checkedArray.every(checkedElementOff)) {
        interestsActive[indexTop].parentElement.querySelector('input').checked = false;
      } 
  }));
}