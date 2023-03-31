const bookText = document.getElementById('book');
const bookControl = Array.from(document.getElementsByClassName('font-size'));
let bookIndex = 1;

for (let index = 0; index < bookControl.length; index++) {
  bookControl[index].addEventListener('click', (e) => {
    if (bookControl[index].getAttribute('data-size') == 'small') {
      bookControl[bookIndex].classList.remove('font-size_active');
      bookControl[index].classList.add('font-size_active');
      bookText.classList.remove('book_fs-big');
      bookText.classList.add('book_fs-small');
      bookIndex = bookControl.indexOf(bookControl[index]);
    } else if (bookControl[index].getAttribute('data-size') == 'big') {
      bookControl[bookIndex].classList.remove('font-size_active');
      bookControl[index].classList.add('font-size_active');
      bookText.classList.remove('book_fs-small');
      bookText.classList.add('book_fs-big');
      bookIndex = bookControl.indexOf(bookControl[index]);
    } else {
      bookControl[bookIndex].classList.remove('font-size_active');
      bookControl[index].classList.add('font-size_active');
      bookText.classList.remove('book_fs-big');
      bookText.classList.remove('book_fs-small');
      bookIndex = bookControl.indexOf(bookControl[index]);
    }
    e.preventDefault();
  });
}
