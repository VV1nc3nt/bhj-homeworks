const tasksList = document.getElementById('tasks__list');
const taskInput = document.getElementById('task__input');
const tasksAddBtn = document.getElementById('tasks__add');


taskInput.addEventListener('keydown', (event) => {
  if (event.key == 'Enter' && taskInput.value && taskInput.value.charAt(0) !== " ") {
    tasksList.innerHTML += `<div class="task">
    <div class="task__title">`
    + taskInput.value +
    `</div>
      <a href="#" class="task__remove">&times;</a>
    </div`;
    event.preventDefault();
    taskInput.value = '';
  }
  let removeBtnList = Array.from(document.getElementsByClassName('task__remove'));
  let task = Array.from(document.getElementsByClassName('task'));
  if (removeBtnList.length != 0) {
    removeBtnList.forEach(element => element.addEventListener('click', (event) => {
      task[removeBtnList.indexOf(element)].remove(); 
      event.preventDefault();
    }));
  }
});


tasksAddBtn.addEventListener('click', (event) => {
  if (taskInput.value && taskInput.value.charAt(0) !== " ") {
    tasksList.innerHTML += `<div class="task">
    <div class="task__title">`
    + taskInput.value +
    `</div>
      <a href="#" class="task__remove">&times;</a>
    </div`;
    event.preventDefault();
    taskInput.value = '';
  }
  let removeBtnList = Array.from(document.getElementsByClassName('task__remove'));
  let task = Array.from(document.getElementsByClassName('task'));
  if (removeBtnList.length != 0) {
    removeBtnList.forEach(element => element.addEventListener('click', (event) => {
      task[removeBtnList.indexOf(element)].remove(); 
      event.preventDefault();
    }));
  }
})
