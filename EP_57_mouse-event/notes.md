# Mouse Events in JavaScript

Mouse events let you react to user actions using the mouse.

## Common Events

### click

Runs when user clicks.

```js
element.addEventListener('click', () => console.log('Clicked'));
```

### dblclick

Runs on double click.

### mousedown / mouseup

When mouse button is pressed / released.

### mouseenter / mouseleave

Runs when mouse enters or leaves element.

### mouseover / mouseout

Like enter/leave but works for child elements (bubbling).

### mousemove

Runs when mouse moves.

## Event Object

```js
event.clientX  // X position
event.clientY  // Y position
event.button   // mouse button
```

## Example

```js
element.addEventListener('mousemove', e => {
  console.log(e.clientX, e.clientY);
});
```

## Tips

* mousemove runs many times (avoid heavy logic)
* mouseenter does not bubble
* mouseover bubbles

---

## Important Questions

1. Difference between mouseover and mouseenter?
2. Difference between mouseup and mousedown?
3. How to get mouse position?
4. Which event runs continuously?
5. What does event.button return?
6. Does mouseleave bubble?
7. Best event for hover effect?
8. How to optimize mousemove?
