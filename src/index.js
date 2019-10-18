'use strict';

import { initSlides, nextSlide, prevSlide, navigate } from './libs/slidesRouter.js';
import { selector, url } from './libs/consts.js';
import './components/slide.js';
import './components/gamepad.js';

const gamepad = document.querySelector('gamepad-api');

const steps = [...document.querySelectorAll(selector)].map(e => e.id);

const state = {
  current: 0,
  steps,
}

const date = new Date();
const tmpl = `
  <p><b>Example:</b>
  Today is <time>${date.toLocaleString()}</time></p>
`;

// document.querySelector('.tmpl-example').innerHTML = tmpl;

!url.hash.length ? 
  setTimeout(() => url.hash = '/' + state.steps[0], 500) : null;

gamepad.addEventListener('button', evt => {
  evt.detail.button === 'prev' ? prevSlide(state) : nextSlide(state);
  navigate(state);
});

initSlides(state);
