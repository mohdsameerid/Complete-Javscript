
# removeChild() and remove() in JavaScript

Both are used to remove elements from the DOM.

## removeChild()

Removes a child element using its parent.

```js
parent.removeChild(child);
```

### Example

```js
let parent = document.getElementById("box");
let child = document.getElementById("item");
parent.removeChild(child);
```

Needs reference to parent.

## remove()

Removes the element directly.

```js
element.remove();
```

### Example

```js
document.getElementById("item").remove();
```

No parent reference needed.

## Notes

* remove() is simpler
* removeChild() is older method
* Both delete element from page

---

## Important Questions

1. Difference between remove and removeChild?
2. Which one is easier and why?
3. Does removeChild need parent?
4. What happens if child doesn't exist?
5. Is remove() supported in older browsers?
6. Which should you prefer today?
7. Can we remove multiple elements?




# Quick Revision — remove & removeChild

* removeChild = via parent
* remove = directly
* remove is simpler
* Both delete DOM element
