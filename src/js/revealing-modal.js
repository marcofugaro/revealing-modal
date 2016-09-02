/*!
 * Revealing Modal
 * http://***.github.com/
 *
 * @author Marco Fugaro - http://marcofugaro.it/
 */

// obviously with that name we need a REVEALING Module Pattern
const RevealingModal = ((window, document, $) => {

  const TRANSIITON_TIME = 300;
  let modals = [];
  let triggers = [];

  const modalTemplate = (html) => `
    <div class="revealing-modal__close">X</div>
    <div class="revealing-modal__content">
      ${html}
    </div>
  `;

  const templates = {
    modalContent: (html) => `<div class="revealing-modal__content">${html}</div>`,
    modalClose: () => `<div class="revealing-modal__close">X</div>`,
  };

  const defaults = {
    slideUpAnimation: true,
    shadow: false,
    fullscreen: false,
  };


  function init({ ...defaults }) {
    modals = [...document.querySelectorAll('.revealing-modal')];
    modals = _buildModal(modals);
    triggers = [...document.querySelectorAll('[data-toggle="revealing-modal"]')];
    _addEventListeners(triggers);
  }

  function openModal(e) {
    // const target = e.currentTarget
    // if has attribute data-target get this, else get the href
  }
  function closeModal() {}

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
  function _addEventListeners(triggers) {
    triggers.forEach((el, i) => {
      el.addEventListener('click', openModal);
    });
  }

  function _triggerEvent(event, modal) {

  },


  return {
    init,
    open,
    close,
  };

})(window, window.document, window.jQuery);