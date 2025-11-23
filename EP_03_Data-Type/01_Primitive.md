# Data Types in JavaScript (Optimized Notes)

## 🔹 JavaScript Has 2 Categories of Data Types
1. **Primitive (Immutable)**
2. **Reference (Mutable)**

This video is about **primitive** types only.

---

# 🔥 Primitive Data Types (Total 7)

### 1. **Number**
- Represents all numbers (int, float).
- No separate integer type.
- `NaN` is also a Number → important interview fact.
- Example: `let x = 42;`

### 2. **String**
- Sequence of characters; immutable.
- Template literals make string handling easier.
- Example: `let name = "Samir";`

### 3. **Boolean**
- Only `true` or `false`.
- Commonly used in conditions, comparisons.
- Example: `let isLogged = false;`

### 4. **Undefined**
- Declared but not assigned.
- JS gives default value = undefined.
- Example: `let a; // undefined`

### 5. **Null**
- Intentionally empty value.
- JS bug: `typeof null === "object"` (Interview classic question)
- Example: `let data = null;`

### 6. **BigInt**
- For very large numbers beyond `Number.MAX_SAFE_INTEGER`.
- Always ends with `n`.
- Example: `let big = 12345678901234567890n;`

### 7. **Symbol**
- Creates unique values; mainly used in object keys.
- Example: `let id = Symbol("userId");`

---

# ⚡ Why Primitive Values Are Called *Immutable*
- When you modify a primitive, JavaScript **creates a new value in memory**.
- The original value cannot be changed.
- Example:
  ```js
  let a = "hello";
  a = "world"; // new value created
