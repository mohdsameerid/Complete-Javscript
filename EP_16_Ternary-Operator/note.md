# Ternary Operator

The ternary operator is a short form of `if-else` written in one line.

## Syntax

```js
condition ? valueIfTrue : valueIfFalse;
```

## Example

```js
let result = age >= 18 ? "Adult" : "Minor";
```

## With Functions

```js
isLoggedIn ? showDashboard() : redirectToLogin();
```

## Nested (avoid if possible)

```js
let grade = marks > 80 ? "A" : marks > 50 ? "B" : "C";
```

## When to Use

* Simple conditions
* UI logic (React JSX)
* Quick value assignment

## Avoid When

* Logic is complex
* Too many conditions
* Code becomes hard to read

## Important Questions

1. What is the ternary operator?
2. Difference between if–else and ternary?
3. Can ternary replace every if statement?
4. Is nested ternary good practice?
5. Where is ternary commonly used?
6. Output of: `5 > 10 ? "Yes" : "No"`?
7. Can we call functions in ternary?
8. How many conditions can ternary have?



# Quick Revision — Ternary Operator

* `? :` is ternary operator
* condition ? true : false
* Shortcut for if–else
* Good for small logic
* Avoid nesting
