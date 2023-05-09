export function initReadMoreAction() {
  const readButton = document.querySelector('.general-info__article-btn');
  const tablet = document.querySelector('.general-info__article-paragraph--tablet');
  const span = document.querySelector('.general-info__article-paragraph--span');
  const desktop = document.querySelector('.general-info__article-paragraph--desktop');
  const desktopMax = document.querySelector('.general-info__article-paragraph--desktop-max');

  const readButtonHandler = function(evt) {
    evt.preventDefault();

    if (readButton.classList.contains('general-info__article-btn--open')) {
      readButton.textContent = 'Показать все';
    } else {
      readButton.textContent = 'Скрыть';
    }

    readButton.classList.toggle('general-info__article-btn--open');
    tablet.classList.toggle('general-info__article-paragraph--tablet--open');
    span.classList.toggle('general-info__article-paragraph--span--open');
    desktop.classList.toggle('general-info__article-paragraph--desktop--open');
    desktopMax.classList.toggle('general-info__article-paragraph--desktop-max--open');
  }

  readButton.addEventListener('click', readButtonHandler);
}
