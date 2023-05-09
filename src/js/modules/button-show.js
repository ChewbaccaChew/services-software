export function initShowMoreAction() {
  classManager('brands__show', 'brands__show-btn', 'brands__wrapper');
  classManager('types__show', 'types__show-btn', 'types__wrapper');

  function classManager(box, btn, wrapper) {
    const showBox = document.querySelector(`.${box}`);
    const showButton = showBox.querySelector(`.${btn}`);
    const sliderWrapper = document.querySelector(`.${wrapper}`);

    const showButtonHandler = function(evt) {
      evt.preventDefault();

      if (showButton.classList.contains(`${btn}--open`)) {
        showButton.textContent = 'Показать все';
      } else {
        showButton.textContent = 'Скрыть';
      }

      showBox.classList.toggle(`${box}--open`);
      showButton.classList.toggle(`${btn}--open`);
      sliderWrapper.classList.toggle(`${wrapper}--all-list`);
    }

    showButton.addEventListener('click', showButtonHandler);
  }
}
