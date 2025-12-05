# getAttribute & setAttribute in JavaScript

These methods are used to **read and change HTML attributes**.

## getAttribute()

Reads the value of an attribute.

```js
let value = element.getAttribute('id');
```

Returns `null` if attribute does not exist.

## setAttribute()

Creates or updates an attribute.

```js
element.setAttribute('class', 'box');
```

## Example

```html
<img id="img" src="old.png">
```

```js
let img = document.getElementById("img");
img.setAttribute("src", "new.png");
let src = img.getAttribute("src");
```

## Remove Attribute

```js
element.removeAttribute('disabled');
```

## Notes

* Works only on element attributes
* Affects actual HTML
* Not the same as JS properties

---

## Important Questions

1. Difference between getAttribute and property access?
2. What does getAttribute return if not found?
3. Can setAttribute create new attribute?
4. Difference between classList and setAttribute('class')?
5. How to remove an attribute?
6. Example to change image src?
7. Attribute vs property?
