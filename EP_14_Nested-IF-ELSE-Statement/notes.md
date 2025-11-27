# notes.md

Nested if–else means placing one if condition inside another.

## Example

```js
if (user) {
  if (user.isAdmin) {
    console.log("Admin User");
  } else {
    console.log("Normal User");
  }
} else {
  console.log("No User");
}
```

Conditions are checked step-by-step.
Inner if runs only if outer condition is true.

## Use Cases

* Role-based access
* Validation inside validation
* Multi-level checks

## Tips

* Avoid deep nesting
* Use else if when possible
* Use functions or return early
* Keep code readable

---

# revision.md

* if inside another if
* Inner runs only if outer true
* Used for multi-level logic
* Avoid over-nesting

---

# Important Questions

1. What is nested if–else?
2. When should it be used?
3. How is it different from else if?
4. What happens if outer if fails?
5. When is nesting a bad practice?
6. How to reduce nesting?
7. Predict output of nested if code
