import '../index.html';
import { initSlider } from './modules/swiper-init.js';
import '../scss/styles.scss';
import { initShowMoreAction } from './modules/button-show.js';
import { initReadMoreAction } from './modules/button-read.js';
import { initModal } from './modules/modals.js';
import { linkActivation } from './modules/link-activation.js';

initReadMoreAction();
initShowMoreAction();
initModal();
initSlider();
linkActivation();
