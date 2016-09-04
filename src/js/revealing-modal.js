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

  const defaults = {
    slideUpAnimation: true,
    shadow: false,
    fullscreen: false,
  };

  let config = {};

  const errors = {
    /**
     * Check if a link is an anchor, if it is returns the link without the #
     * 
     * @param  {string}  link - the link to check
     * @return {Boolean/string} returns false if it's not an anchror, the link without the # if instead it is
     */
    isAnchor(link) {
      if (link.charAt(0) !== '#') {
        throw new Error('The href attribute must be an anchor');
        return false;
      }

      return link.slice(1);
    },
  };

  function init(options = {}) {
    config = { ...defaults, ...options };

    modals = [...document.querySelectorAll('.revealing-modal')];
    modals = _buildModal(modals);
    triggers = [...document.querySelectorAll('[data-toggle="revealing-modal"]')];
    _addEventListeners(triggers);
  }

  function openModal(e) {
    let targetId = '';
    if (e.currentTarget.hasAttribute('data-target')) {
      targetId = e.currentTarget.getAttribute('data-target');
    } else {
      targetId = _errors.isAnchor(e.currentTarget.getAttribute('href'))
      if(!targetId)
        return;
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
