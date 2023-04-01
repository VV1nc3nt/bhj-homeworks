const chatWidget = document.querySelector('.chat-widget');
const chatInput = document.getElementById('chat-widget__input');
const messages = document.querySelector('.chat-widget__messages');
const botMessagesArray = [
  'Добрый день, мы ещё не проснулись. Позвоните через 10 лет',
  'Здравствуйте! Вас мы обслуживать не будем!',
  'Приветствуем, к сожалению мы вам не подходим',
  'Добрый день, не приставайте к нам с вашими глупыми вопросами',
  'Здравствуйте, мы не можем ответить, нет настроения',
  'Простите, мы не можем быть вместе, всего доброго',
  'Всего доброго и хорошего дня!'
];
let messageTime = new Date();

chatWidget.addEventListener('click', () => {
  chatWidget.classList.add('chat-widget_active');
});

chatInput.addEventListener('keydown', (event) => {
  console.log(event.key);
  if (event.key == 'Enter') {
    messages.innerHTML += `
      <div class="message message_client">
        <div class="message__time">` + messageTime.getHours() + ':' + messageTime.getMinutes() + `</div>
        <div class="message__text">`
          + chatInput.value +
        `</div>
      </div>
      `;
    messages.innerHTML += `
      <div class="message">
        <div class="message__time">` + messageTime.getHours() + ':' + messageTime.getMinutes() + `</div>
        <div class="message__text">`
          + botMessagesArray[Math.floor(Math.random()*botMessagesArray.length)] +
        `</div>
      </div>
      `;
    chatInput.value = '';
  }
});