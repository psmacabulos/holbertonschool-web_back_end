# ES6 Promises

## 📌 Overview

This project introduces **JavaScript ES6 Promises** and asynchronous programming patterns.
It focuses on understanding how JavaScript handles non-blocking operations using Promises and `async/await`.

---

## 🎯 Learning Objectives

By the end of this project, you should be able to explain:

* What a **Promise** is (how, why, and what)
* How to use:

  * `then`
  * `catch`
  * `resolve`
  * `reject`
* How to use Promise methods:

  * `Promise.all`
  * `Promise.race`
  * `Promise.allSettled`
  * `Promise.any`
* Error handling using:

  * `throw`
  * `try/catch`
* The `await` operator
* How `async` functions work

---

## 🧠 Key Concepts

### Promises

A Promise represents a value that will be available in the future.

States:

* `pending`
* `fulfilled`
* `rejected`

---

### Async / Await

* `async` functions always return a Promise
* `await` pauses execution until a Promise is resolved or rejected

---

### Sequential vs Concurrent Execution

```js
// Sequential (slower)
await task1();
await task2();

// Concurrent (faster)
const p1 = task1();
const p2 = task2();
await p1;
await p2;
```

---

## 📁 Project Files

| File               | Description                   |
| ------------------ | ----------------------------- |
| 0-promise.js       | Create a basic Promise        |
| 1-promise.js       | Resolve or reject a Promise   |
| 2-then.js          | Handle Promise with then      |
| 3-all.js           | Use Promise.all               |
| 4-user-promise.js  | Combine async results         |
| 5-photo-reject.js  | Handle Promise rejection      |
| 6-final-user.js    | Aggregate results             |
| 7-load_balancer.js | Use Promise.race              |
| 8-try.js           | Error handling with try/catch |
| 9-try.js           | Advanced error handling       |

---

## ⚙️ Requirements

* Ubuntu 20.04 LTS
* Node.js 20.x.x
* npm 9.x.x
* Jest (for testing)
* ESLint (for linting)

---

## 🧪 Testing

Run tests using:

```bash
npm test
```

---

## ⚠️ Common Mistakes

* Forgetting to return values in `.then()`
* Not handling Promise rejections
* Misunderstanding `await` (it does not create parallel execution)
* Mixing synchronous blocking code with async logic

---

## ✅ Best Practices

* Use `Promise.all()` for concurrent operations
* Prefer `async/await` for readability
* Always handle errors properly
* Avoid unnecessary sequential execution

---

## 👨‍💻 Author

Patrick Macabulos
