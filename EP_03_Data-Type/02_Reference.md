# Reference Data Types in JavaScript

## WHAT

Reference data types represent **complex, mutable values** like objects, arrays, and functions. Instead of storing the actual value in the variable, JavaScript stores a **reference (pointer)** to the value in memory.

---

## Types of Reference Data Types

* **Object** – key-value pairs
* **Array** – ordered collections
* **Function** – callable objects
* **Other built‑ins** – Date, Map, Set, RegExp, etc.

---

## HOW Reference Types Work

### 1. Stored in Heap Memory

The value lives in heap memory, and the variable only holds the memory address.

### 2. Copying Creates Shared Reference

Assigning a reference type to another variable does **not** create a new copy.

```js
let a = { name: "Samir" };
let b = a;
b.name = "Idrishi";
// a.name also becomes "Idrishi"
```

### 3. Equality is Based on Reference, Not Structure

```js
{} === {} // false
let x = {};
let y = x;
x === y // true
```

---

## WHY Reference Types Matter

* Prevents accidental mutations in large apps.
* Crucial for React’s state management (immutability rules).
* Helps understand bugs involving shared objects.
* Essential for performance and predictable code behavior.