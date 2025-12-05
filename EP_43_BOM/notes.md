# BOM — Browser Object Model

BOM lets JavaScript control the browser window and interact outside the web page content.

## Common BOM Properties & Methods

### location

Used to get or change the current URL.

```js
location.href = "https://google.com";
```

### history

Used to move through browser history.

```js
history.back();
history.forward();
```

### innerHeight / innerWidth

Returns browser viewport size.

```js
window.innerHeight;
window.innerWidth;
```

### open() / close()

Opens or closes a window.

```js
let win = window.open("https://google.com");
win.close();
```

### resizeTo() / resizeBy()

Changes window size.

```js
window.resizeBy(100, 100);
window.resizeTo(500, 500);
```

### moveTo() / moveBy()

Moves window position.

```js
window.moveBy(50, 50);
window.moveTo(100, 100);
```

### scroll(), scrollTo(), scrollBy()

Controls page scrolling.

```js
window.scrollTo(0, 500);
window.scrollBy(0, 100);
```

### print()

Prints the current page.

```js
window.print();
```

### document

Access HTML content (DOM starts here).

```js
document.title;
```

## Notes

* BOM works only in browsers
* Controls window, not HTML
* Global object is `window`

---

## Important Questions

1. What is BOM in JavaScript?
2. Difference between BOM and DOM?
3. What does `location.href` do?
4. How to go back in history?
5. Which method scrolls the page?
6. What is `window.innerWidth`?
7. Can we resize browser window using JS?
8. What does `window.print()` do?
