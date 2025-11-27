# notes.md

Logical operators are used to combine conditions and return true or false.

## AND (&&)

Returns true if **both** conditions are true.

```js
true && false   // false
5 > 2 && 10 > 3 // true
```

## OR (||)

Returns true if **any one** condition is true.

```js
false || true   // true
0 || "hi"        // hi
```

## NOT (!)

Reverse the result.

```js
!true   // false
!0      // true
```

## Short-Circuit Behavior

```js
false && func()  // func() won't run
true || func()   // func() won't run
```

## Real Usage

* Validations
* Login checks
* Default values
* Feature toggle logic

---

# revision.md

* && needs both true
* || needs one true
* ! reverses result
* Uses short-circuiting

---

# Important Questions

1. Difference between && and || ?
2. What is short-circuit evaluation?
3. What does !"hello" return?
4. Difference between logical and comparison operators?
5. Predict output: true && false || true
6. How are logical operators used in forms?
7. What does 0 || "JS" return?
