import modalTemplate from './template';
import ERRORS from './errors';

// TODO reinit the module if something is loaded asyncronously


// obviously with that name we need a REVEALING Module Pattern
const RevealingModal = ((window, document, $) => {

  const TRANSIITON_TIME = 300;
  let modals = [];
  let triggers = [];


  const defaults = {
    slideUpAnimation: true,
    shadow: false,
    fullscreen: false,
  };

  let config = {};

  function init(options = {}) {
    config = { ...defaults, ...options };

    modals = [...document.querySelectorAll('.revealing-modal')];
    modals = _buildModal(modals);

    triggers = [...document.querySelectorAll('[data-toggle="revealing-modal"]')];
    _addTriggersEventListeners(triggers);

    let closeButtons = [...document.querySelectorAll('.revealing-modal__close')];
    _addCloseEventListeners(closeButtons);
  }


  /**
   * Gets the modal element starting from the trigger element
   *
   * @return {node} returns the modal node
   */
  function _getTargetModal(trigger) {
    const targetId = trigger.hasAttribute('data-target') ? trigger.getAttribute('data-target') : trigger.getAttribute('href');

    if (targetId.charAt(0) !== '#') {
      ERRORS.isNotId();
      return false;
    }

    const target = document.getElementById(targetId.slice(1));

    if (!target) {
      ERRORS.modalNotFound();
      return false;
    }

    return target;
  }

  function openModal(modal) {
    modal.classList.add('open');

    // trigger events
  }

  function closeModal(modal) {
    modal.classList.remove('open');
  }

  /**
   * Build the modal and append it to the dom
   *
   * @param {array} modals - a list of the raw elements of the modal from the DOM
   * @return {array} a list of the new elements apended to the DOM
   */
  function _buildModal(modals) {
    return modals.map((el, i) => {
      el.innerHTML = modalTemplate(el.innerHTML);
      return document.body.appendChild(el);
    });
  }

  /**
   * Attach the event listeners to the trigger elements
   *
   * @param {array} triggers - the triggers list
   */
  function _addTriggersEventListeners(triggers) {
    triggers.forEach((el, i) => {
      el.addEventListener('click', (e) => {
        const modal = _getTargetModal(e.currentTarget)

        if (modal) {
          openModal(modal);
        }
      });
    });
  }

  /**
   * Attach the event listeners to the close buttons
   *
   * @param {array} close buttons - the array of buttons
   */
  function _addCloseEventListeners(buttons) {
    buttons.forEach((el, i) => {
      el.addEventListener('click', (e) => {
        const modal = el.parentNode

        closeModal(modal);
      });
    });
  }

  function _triggerEvent(event, modal) {

  }


  return {
    init,
    open,
    close,
  };

})(window, window.document, window.jQuery);

RevealingModal.init({
    slideUpAnimation: true,
    // shadow: true,
    fullscreen: true,
  });
