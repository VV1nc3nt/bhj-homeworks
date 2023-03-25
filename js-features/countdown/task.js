const timer = function() {
  let myTime = document.getElementById('timer');
  let statusDiv = document.getElementById('status');
  
  myTime.textContent -= 1;
  
  if (myTime.textContent == 0) {
    alert('Вы победили в конкурсе!');
    statusDiv.textContent = 'Конкурс окончен! Вы победили!';
  }
}

setInterval(timer, 1000);