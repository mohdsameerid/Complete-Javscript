# Arrays in JavaScript

Arrays store multiple values in one variable.

## Create Array

```js
let arr = [1, 2, 3, 4];
```

## Access Items

```js
arr[0]   // first
arr[arr.length - 1] // last
```

## Common Methods

### Add / Remove

```js
arr.push(5)     // add at end
arr.pop()       // remove last
arr.unshift(0)  // add at start
arr.shift()     // remove first
```

### Search

```js
arr.indexOf(3)  // index or -1
arr.includes(2) // true/false
```

### Merge / Slice

```js
arr.concat([6,7])
arr.slice(1, 3)   // copy part
arr.splice(1, 1)  // remove/replace
```

### Looping

```js
arr.forEach(x => console.log(x))
let newArr = arr.map(x => x * 2)
let even = arr.filter(x => x % 2 === 0)
```

### Reduce

```js
arr.reduce((sum, x) => sum + x, 0)
```

### Sort / Reverse

```js
arr.sort()
arr.reverse()
```

## Useful Notes

* Arrays are ordered
* Index starts from 0
* Can store any data type

---

## Important Questions

1. Difference between map and forEach?
2. slice vs splice?
3. How to remove duplicates from array?
4. push vs unshift?
5. filter vs map?
6. When to use reduce?
7. How to check if value exists?
8. How to clone an array?
