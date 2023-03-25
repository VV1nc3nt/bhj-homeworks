function clicker() {
  let cookie = document.getElementById('cookie');
  let clicker_counter = document.getElementById('clicker__counter');

  ++clicker_counter.textContent;

  if (cookie.width == 200) {
    cookie.width = 250;
  } else {
    cookie.width = 200;
  }
};

cookie.onclick = clicker;