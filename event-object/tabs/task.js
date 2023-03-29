const tabsHeads = Array.from(document.getElementsByClassName('tab'));
const tabsContent = Array.from(document.getElementsByClassName('tab__content'));
let tabIndex = 0;


for (let index = 0; index < tabsHeads.length; index++) {
  tabsHeads[index].addEventListener('click', () => {
    tabsHeads[tabIndex].classList.toggle('tab_active');
    tabsContent[tabIndex].classList.toggle('tab__content_active');
    tabsHeads[index].classList.toggle('tab_active');
    tabsContent[index].classList.toggle('tab__content_active');
    tabIndex = tabsHeads.indexOf(tabsHeads[index]);
  });
}