/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/modules/test.js
var sum = function sum(a, b) {
  return a * b;
};
;// CONCATENATED MODULE: ./src/js/modules/slider.js
var slider = new Swiper('.slider', {
  // Optional parameters
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});
;// CONCATENATED MODULE: ./src/js/index.js


console.log(sum(20, 10));
/******/ })()
;