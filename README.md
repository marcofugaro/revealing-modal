# revealing-modal
Modal window plugin inspired by the Marshmallow opening app animation

## Getting started

## Usage

Put the content of the modal in an element with the class `revealing-modal` and the id equal to the caller
```html
<a href="#my-cusom-modal" data-toggle="revealing-modal"></a>
<div class="revealing-modal" id="my-cusom-modal">
  ...
</div>
```


```html
<button data-toggle="revealing-modal" data-target="#my-cusom-modal"></button>
```


Or you can use it with jquery
```js
const myCustomModal = $('#my-cusom-modal').revealingModal({ ...options });
myCustomModal.revealingModal('open');
myCustomModal.revealingModal('close');
myCustomModal.revealingModal('destroy');
```

## Options
```js
{
    slideUpAnimation: true,
    fullscreen: false, //??
    shadow: false,
}

```


## Events
`open.revealingModal, opened.revealingModal, close.revealingModal, closed.revealingModal`

## Methods