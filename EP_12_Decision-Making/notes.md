# notes.md

The if statement is used to run code based on a condition.

## Syntax

```js
if (condition) {
  // run if true
}
```

## if–else

```js
if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}
```

## else if

```js
if (marks > 90) {
  grade = "A";
} else if (marks > 70) {
  grade = "B";
} else {
  grade = "C";
}
```

## Nested if

```js
if (user) {
  if (user.isAdmin) {
    console.log("Admin");
  }
}
```

## Real Usage

* Validation
* Login checks
* Feature control
* Error handling

---

# revision.md

* if runs when condition true
* else runs when condition false
* else if for multiple checks
* Nested if inside another if

---

# Important Questions

1. Difference between if and else?
2. When to use else if?
3. What happens if no condition is true?
4. Can if exist without else?
5. What is nested if?
6. Predict output for simple if cases
7. How if works with truthy/falsy values?
