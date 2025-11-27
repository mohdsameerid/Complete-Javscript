# notes.md

Comparison operators are used to compare two values and return **true** or **false**.

## Operators

```js
==   // equal (value only)
===  // strict equal (value + type)
!=   // not equal
!==  // strict not equal
>    // greater than
<    // less than
>=   // greater than or equal
<=   // less than or equal
```

## Key Difference

```js
5 == "5"   // true
5 === "5"  // false
```

## Type Conversion Example

```js
null == undefined  // true
null === undefined // false

0 == false  // true
0 === false // false
```

## String Comparison

```js
"a" > "b"   // false
"A" < "a"   // true (ASCII based)
```

## Best Practice

Always use `===` and `!==` in real projects.

---

# revision.md

* == checks value only
* === checks value + type
* != and !== for not equal
* Strings compare by ASCII
* Use strict comparison

---

# Important Questions

1. Difference between == and ===?
2. Why is 0 == false true?
3. null == undefined is true or false?
4. Which should be used in production and why?
5. How does JavaScript compare strings?
6. Is "5" > 3 true or false?
7. Difference between != and !==?
8. Can different data types be compared?
