# JavaScript Variables — let, const, var (Optimized Notes)

## WHAT

Variables store values. In modern JS we use **let** and **const** (block-scoped). **var** is legacy (function-scoped) and has hoisting/TDZ quirks.

---

## Key Differences (Quick)

* **Scope**

  * `var` → function-scoped (or global)
  * `let`, `const` → block-scoped
* **Hoisting**

  * `var` is hoisted and initialized with `undefined` (usable before declaration)
  * `let`/`const` are hoisted but **uninitialized** (TDZ) → ReferenceError if accessed before declaration
* **Redeclaration / Reassignment**

  * `var`: can redeclare and reassign
  * `let`: cannot redeclare in same scope; can reassign
  * `const`: cannot redeclare or reassign (binding is constant)
* **Global object property**

  * `var` declared in global scope creates a property on `window` (browser). `let`/`const` do NOT.

---

## HOW to use each (Short practical guide)

* **use `const` by default** for values that should not be rebound (most cases: functions, arrays, objects, primitives you won't reassign).
* **use `let`** when you need to reassign (loop counters, mutable state).
* **avoid `var`** except when maintaining legacy code; `var` causes subtle bugs due to function scope and hoisting.

Examples:

```js
// var hoisting
console.log(x); // undefined
var x = 10;

// let TDZ
console.log(y); // ReferenceError
let y = 5;

// const mutation caveat
const obj = {a:1};
obj.a = 2; // allowed — binding is const, object is mutable
obj = {}; // TypeError
```

---

## WHY these details matter (Interview + Real code)

* **TDZ & hoisting** explain many runtime errors — understanding them prevents accidental bugs.
* **Scope differences** important for closures and loops (common interview pitfalls with `var` in loops and `setTimeout`).
* **`const` misconception**: const prevents reassignment of binding, not mutation — critical for safe state handling (React).
* **Global leakage** from `var` can cause naming collisions in large apps.

---

## Common Interview Triggers (be ready to explain)

* `var` vs `let` vs `const` differences (scope, hoisting, redeclare, reassign).
* Temporal Dead Zone — what it is and why `let`/`const` throw before declaration.
* Why `console.log(x)` before `var x` prints `undefined`, but with `let` it throws.
* `for` loop closures: why `var` in loop + async callbacks behave unexpectedly, and how `let` fixes it.
* `const` with objects/arrays — is it immutable? (explain binding vs value immutability).

---

## Best Practices

* Default to `const`.
* Use `let` only when you must reassign.
* Never use `var` in new code.
* Prefer small block scopes; minimize mutable state.
* For immutable objects, use freezing or immutable patterns if needed.

---

## Short Gotchas

* `typeof undeclaredVariable` returns `undefined`, but accessing `let`/`const` before declaration throws ReferenceError.
* `var` in `for` loop shares same binding across iterations (classic bug with closures).
* `const` objects can be mutated — use `Object.freeze` for shallow immutability.

# Final takeaway

Use `const` by default, `let` for reassignments, and treat `var` as legacy: understand its hoisting/scoping quirks for debugging and reading older code.
