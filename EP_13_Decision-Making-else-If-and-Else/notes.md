# notes.md

else if and else are used to handle multiple conditions in a clean and readable way.

## Example

```js
if (score >= 90) {
  grade = "A";
} else if (score >= 70) {
  grade = "B";
} else if (score >= 50) {
  grade = "C";
} else {
  grade = "Fail";
}
```

Conditions are checked top to bottom.
Once true, rest are skipped.

## Tips

* Keep most specific condition first
* Avoid too many nested ifs
* Prefer else if chain
* Use early return in real projects

## Bad Practice

```js
if (x > 0) {}
if (x > 10) {}
```

(use else if instead)

---

# revision.md

* Checked in order
* First true block runs
* else for default case
* Cleaner than multiple ifs

---

# Important Questions

1. How else if works internally?
2. Does else if always execute?
3. What happens if multiple conditions are true?
4. When to use else block?
5. Difference between nested if and else if?
6. Best order for conditions?
7. Why avoid separate if statements here?
