const modalTemplate = (html) => `
  <div class="revealing-modal__close">X</div>
  <div class="revealing-modal__content">
    ${html}
  </div>
`;

export default modalTemplate;