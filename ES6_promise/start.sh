#!/usr/bin/env bash

set -e

echo "📁 Creating ES6 Promises task files..."

touch 0-promise.js
touch 1-promise.js
touch 2-then.js
touch 3-all.js
touch 4-user-promise.js
touch 5-photo-reject.js
touch 6-final-user.js
touch 7-load_balancer.js
touch 8-try.js
touch 9-try.js

echo "📝 Creating README.md..."

cat <<EOL > README.md

# ES6 Promises

## 📌 Overview

This project focuses on understanding JavaScript ES6 Promises and asynchronous programming.

---

## 🎯 Learning Objectives

* Understand what a Promise is (how, why, what)
* Use:

  * then
  * catch
  * resolve
  * reject
* Work with:

  * Promise.all
  * Promise.race
  * Promise.allSettled
  * Promise.any
* Use async / await
* Handle errors using try/catch

---

## 📁 Files

| File               | Description               |
| ------------------ | ------------------------- |
| 0-promise.js       | Basic Promise creation    |
| 1-promise.js       | Resolving or rejecting    |
| 2-then.js          | Using then                |
| 3-all.js           | Promise.all usage         |
| 4-user-promise.js  | Multiple async operations |
| 5-photo-reject.js  | Handling rejection        |
| 6-final-user.js    | Combining results         |
| 7-load_balancer.js | Promise.race              |
| 8-try.js           | Error handling            |
| 9-try.js           | Advanced error handling   |

---

## ⚙️ Requirements

* Node.js 20.x.x
* npm 9.x.x
* ESLint
* Jest

---

## ▶️ Usage

Run tests:

```bash
npm test
```

---

## 👨‍💻 Author
Patrick Macabulos
Holberton Student
EOL

echo "✅ All task files and README created."
