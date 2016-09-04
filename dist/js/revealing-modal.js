(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"C:\\Users\\Marco\\Desktop\\revealing-modal\\src\\js\\revealing-modal.js":[function(require,module,exports){
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/*!
 * Revealing Modal
 * http://***.github.com/
 *
 * @author Marco Fugaro - http://marcofugaro.it/
 */

// obviously with that name we need a REVEALING Module Pattern
var RevealingModal = function (window, document, $) {

  var TRANSIITON_TIME = 300;
  var modals = [];
  var triggers = [];

  var modalTemplate = function modalTemplate(html) {
    return '\n    <div class="revealing-modal__close">X</div>\n    <div class="revealing-modal__content">\n      ' + html + '\n    </div>\n  ';
  };

  var defaults = {
    slideUpAnimation: true,
    shadow: false,
    fullscreen: false
  };

  var config = {};

  var errors = {
    /**
     * Check if a link is an anchor, if it is returns the link without the #
     * 
     * @param  {string}  link - the link to check
     * @return {Boolean/string} returns false if it's not an anchror, the link without the # if instead it is
     */
    isAnchor: function isAnchor(link) {
      if (link.charAt(0) !== '#') {
        throw new Error('The href attribute must be an anchor');
        return false;
      }

      return link.slice(1);
    }
  };

  function init() {
    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    config = _extends({}, defaults, options);

    modals = [].concat(_toConsumableArray(document.querySelectorAll('.revealing-modal')));
    modals = _buildModal(modals);
    triggers = [].concat(_toConsumableArray(document.querySelectorAll('[data-toggle="revealing-modal"]')));
    _addEventListeners(triggers);
  }

  function openModal(e) {
    var targetId = '';
    if (e.currentTarget.hasAttribute('data-target')) {
      targetId = e.currentTarget.getAttribute('data-target');
    } else {
      targetId = _errors.isAnchor(e.currentTarget.getAttribute('href'));
      if (!targetId) return;
    }

    document.getElementById(targetId).classList.add('open');
  }
  function closeModal() {}

  /**
   * Build the modal and append it to the dom
   *
   * @param {array} modals - a list of the raw elements of the modal from the DOM
   * @return {array} a list of the new elements apended to the DOM
   */
  function _buildModal(modals) {
    return modals.map(function (el, i) {
      el.innerHTML = modalTemplate(el.innerHTML);
      return document.body.appendChild(el);
    });
  }

  /**
   * Attach the event listeners to the trigger elements
   *
   * @param {array} triggers - the triggers list
   */
  function _addEventListeners(triggers) {
    triggers.forEach(function (el, i) {
      el.addEventListener('click', openModal);
    });
  }

  function _triggerEvent(event, modal) {}

  return {
    init: init,
    open: open,
    close: close
  };
}(window, window.document, window.jQuery);

RevealingModal.init({
  slideUpAnimation: true,
  // shadow: true,
  fullscreen: true
});

},{}]},{},["C:\\Users\\Marco\\Desktop\\revealing-modal\\src\\js\\revealing-modal.js"]);
