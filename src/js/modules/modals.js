export function initModal() {
  const backgroundModal = document.querySelector('.modal-background-blur');
  const backgroundBurger = document.querySelector('.burger-background-blur');

  const btnOpenBurger = document.querySelector('.header__btn');
  const modifiableBurgerObj = document.querySelector('.burger-menu');
  const btnCloseBurger = modifiableBurgerObj.querySelector('.burger-menu__burger-btn');

  const burgerHandler = function(evt) {
    evt.preventDefault();
    modifiableBurgerObj.classList.toggle('burger-menu--open');
    backgroundModal.classList.toggle('modal-background-blur--open');
    if (modifiableBurgerObj.classList.contains('burger-menu--open')) {
      document.querySelector('.burger-focus').focus();
    }
  }

  btnOpenBurger.addEventListener('click', burgerHandler);
  btnCloseBurger.addEventListener('click', burgerHandler);

  const btnOpenModalCall = document.querySelector('.burger-menu__btn-call');
  const modifiableModalObjCall = document.querySelector('.modal-call');
  const btnCloseModalCall = modifiableModalObjCall.querySelector('.modal-call__btn-cross');

  const btnOpenModalChat = document.querySelector('.burger-menu__btn-chat');
  const modifiableModalObjChat = document.querySelector('.modal-chat');
  const btnCloseModalChat = modifiableModalObjChat.querySelector('.modal-chat__btn-cross');

  const modalCallHandler = function(evt) {
    evt.preventDefault();
    modifiableModalObjCall.classList.toggle('modal-call--open');
    modifiableBurgerObj.classList.toggle('burger-menu--open');
    if (window.matchMedia('(min-width: 1120px)').matches) {
      backgroundBurger.classList.toggle('burger-background-blur--open');
      backgroundModal.classList.toggle('modal-background-blur--open');
      modifiableBurgerObj.classList.remove('burger-menu--open');
    }
    if (modifiableModalObjCall.classList.contains('modal-call--open')) {
      document.querySelector('.call-focus').focus();
    }
  }

  const modalChatHandler = function(evt) {
    evt.preventDefault();
    modifiableModalObjChat.classList.toggle('modal-chat--open');
    modifiableBurgerObj.classList.toggle('burger-menu--open');
    if (window.matchMedia('(min-width: 1120px)').matches) {
      backgroundBurger.classList.toggle('burger-background-blur--open');
      backgroundModal.classList.toggle('modal-background-blur--open');
      modifiableBurgerObj.classList.remove('burger-menu--open');
    }
    if (modifiableModalObjChat.classList.contains('modal-chat--open')) {
      document.querySelector('.chat-focus').focus();
    }
  }

  btnOpenModalCall.addEventListener('click', modalCallHandler);
  btnCloseModalCall.addEventListener('click', modalCallHandler);

  btnOpenModalChat.addEventListener('click', modalChatHandler);
  btnCloseModalChat.addEventListener('click', modalChatHandler);

  const outsideClick = function(evt) {
    const target = evt.target;
    if (modifiableBurgerObj.classList.contains('burger-menu--open')) {
      if (!target.closest('.burger-menu') && !target.closest('.header__btn')) {
        modifiableBurgerObj.classList.remove('burger-menu--open');
        backgroundModal.classList.remove('modal-background-blur--open');
      }
    } else if (modifiableModalObjCall.classList.contains('modal-call--open')) {
      if (!target.closest('.modal-call') && !target.closest('.burger-menu__btn-call')) {
        modifiableModalObjCall.classList.remove('modal-call--open');
        backgroundModal.classList.remove('modal-background-blur--open');
        if (window.matchMedia('(min-width: 1120px)').matches) {
          backgroundBurger.classList.remove('burger-background-blur--open');
        }
        document.querySelector('.header-focus').focus();
      }
    } else if (modifiableModalObjChat.classList.contains('modal-chat--open')) {
      if (!target.closest('.modal-chat') && !target.closest('.burger-menu__btn-chat')) {
        modifiableModalObjChat.classList.remove('modal-chat--open');
        backgroundModal.classList.remove('modal-background-blur--open');
        if (window.matchMedia('(min-width: 1120px)').matches) {
          backgroundBurger.classList.remove('burger-background-blur--open');
        }
        document.querySelector('.header-focus').focus();
      }
    }
  }

  window.addEventListener('click', outsideClick);
}
