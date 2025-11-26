# notes.md

Template literals let you create strings with easier formatting using backticks (`` ` ``).

### Basics

```js
const name = "Samir";
const msg = `Hello ${name}`;
```

You can insert variables using **${ }**.

### Multi-line Strings

```js
const text = `Line 1
Line 2`;
```

No need for \n.

### Expressions

```js
const total = `Total: ${5 + 7}`;
```

### Tagged Templates

Advanced use: a function processes the template.

```js
function greet(strings, value) {
  return strings[0] + value.toUpperCase();
}
const result = greet`Hello ${"samir"}`;
```

---

# revision.md

* Use backticks for flexible strings
* ${ } to insert values
* Supports multi-line strings
* Can evaluate expressions
* Tagged templates = custom processing
