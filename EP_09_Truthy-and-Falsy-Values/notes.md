# notes.md

Truthy and Falsy values decide whether a condition runs or not in JavaScript.

JavaScript converts values into **true or false** automatically when used in conditions (if, while, logical operators).

## Falsy Values (Only these are false)

```js
false
0
-0
0n
""
null
undefined
NaN
```

Everything else is **truthy**.

## Examples

```js
if ("") console.log("run");  // won't run
if ("hi") console.log("run"); // runs

Boolean(0)      // false
Boolean("abc")  // true
```

## Real Usage

* Form validation
* Checking empty values
* Login/auth checks
* Feature toggles

---

# revision.md

* Falsy = false, 0, "", null, undefined, NaN
* Everything else = truthy
* Boolean(value) to check
* Used in conditions

---

# Important Questions

1. What are all falsy values in JavaScript?
2. Is "0" truthy or falsy?
3. Difference between false and "false"?
4. What does Boolean(undefined) return?
5. Will empty array [] be truthy or falsy?
6. Difference between == and truthy checks?
7. Why is NaN falsy?
8. How are truthy values used in real projects?
