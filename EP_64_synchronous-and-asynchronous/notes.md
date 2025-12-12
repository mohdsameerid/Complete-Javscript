

# Synchronous vs Asynchronous JavaScript

## Synchronous JavaScript

* Code runs **line by line**.
* Next line waits until previous one completes.
* Good for simple tasks.
* Bad when a task takes long → blocks UI.

### Example

```js
console.log("Start");
for(let i = 0; i < 5000000000; i++){} // heavy task
console.log("End");
```

The page freezes until loop finishes.

---

## Asynchronous JavaScript

* Code **does NOT wait**.
* Long tasks run in background.
* Browser handles them using Web APIs → callback queue → event loop.
* Great for real apps: API calls, timers, events, file uploads.

### Example

```js
console.log("Start");
setTimeout(() => console.log("Async Task"), 2000);
console.log("End");
```

Output:
Start → End → Async Task

---

## How Async Works (Simple)

1. JS sends task to Web API browser area.
2. Task completes.
3. Callback is pushed to queue.
4. Event Loop puts callback into call stack.

---

## Common Async Tools

* setTimeout
* setInterval
* fetch / API calls
* Promises
* async/await

---

## Real-Life Analogy

Synchronous → Standing in a queue; you wait until person before you finishes.

Asynchronous → Token system; you take token and do other work until your turn comes.

---

## Important Questions

1. What is synchronous JS?
2. Why is async needed?
3. What problem does async solve?
4. What is event loop?
5. Difference between call stack & callback queue?
6. Example of sync vs async code.
7. Why doesn’t async block UI?
8. What are Web APIs?







# Quick Revision — Sync vs Async

* Sync → runs line by line, blocks.
* Async → doesn't wait, non-blocking.
* setTimeout, fetch, events → async.
* Event Loop moves callbacks to stack.
* Sync blocks UI; async keeps UI smooth.
* JS is single‑threaded but async makes it feel parallel.
