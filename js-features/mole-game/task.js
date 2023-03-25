const getHole = index => document.getElementById(`hole${index}`);
const win = document.getElementById('dead');
const lose = document.getElementById('lost');


for (let i = 1; i < 10; i++) {
  getHole(i).onclick = () => {
    if (getHole(i).classList.contains('hole_has-mole')) {
      ++win.textContent;
      if (win.textContent == 10) {
        alert('Вы победили!');
        win.textContent = 0;
        lose.textContent = 0;
      }
    } else {
      ++lose.textContent;
      if (lose.textContent == 5) {
        alert('Победили кроты =(')
        win.textContent = 0;
        lose.textContent = 0;
      }
    }
  }
}