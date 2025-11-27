# notes.md

Switch is used to match a value and run a case block.

## Syntax

```js
switch(day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  default:
    console.log("Invalid day");
}
```

## How it Works

* Value is matched with each case
* First matching case runs
* `break` stops further execution
* `default` runs if no case matches

## Fall Through

Without break, next case also runs.

```js
case 1:
case 2:
  console.log("Weekday");
```

## When to Use

* Multiple fixed values
* Menu/option handling
* Cleaner than many else-if

---

# revision.md

* switch checks value
* case matches
* break stops
* default if none matches
* no break = fall through

---

# Important Questions

1. What happens if break is missing?
2. Purpose of default?
3. Difference between switch and else-if?
4. What is fall-through?
5. Can switch compare expressions?
6. Multiple cases same output?
7. When not to use switch?
