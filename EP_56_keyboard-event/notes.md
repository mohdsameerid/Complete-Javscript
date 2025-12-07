# Keyboard Events in JavaScript

Keyboard events let you handle user typing and key actions.

## Main Events

### keydown

Fires when a key is pressed.

```js
document.addEventListener('keydown', e => console.log(e.key));
```

### keyup

Fires when key is released.

```js
document.addEventListener('keyup', e => console.log(e.key));
```

### keypress (deprecated)

Old event for character keys — avoid using.

## Event Object

```js
event.key      // pressed key
event.code     // physical key
event.ctrlKey  // true if Ctrl pressed
event.shiftKey // true if Shift pressed
```

## Example

```js
document.addEventListener('keydown', e => {
  if (e.key === 'Enter') alert('Enter pressed');
});
```

## Notes

* Works only when page is focused
* keydown triggers first
* keyup triggers last
* keypress is outdated

---

## Important Questions

1. Difference between keydown and keyup?
2. What is event.key?
3. Is keypress still used?
4. How to detect Enter key?
5. What is event.code?
6. How to check Ctrl key?
7. Which event runs first?
8. Can keyboard events work without focus?







# Quick Revision — Keyboard Events

* keydown = key pressed
* keyup = key released
* keypress = deprecated
* event.key gives key
* event.code gives physical key
* ctrlKey / shiftKey detect combos
* Page must be focused
