import {initMap} from './ymaps.js';
import {initSelect} from './select.js';
import {submitForm} from './form.js';
import {initTelVal, initEmailVal} from './validation.js';

$(document).ready (() => {
  initSelect();
  initMap();
  initTelVal();
  initEmailVal();
  submitForm();
});
