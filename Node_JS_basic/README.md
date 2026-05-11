# Node.js Getting Started

This repository contains solutions and exercises for the Holberton School Node.js Getting Started project.

# Node.js Getting Started

This repository contains exercises and learning activities focused on the fundamentals of backend development using Node.js and Express.js.

---

# 📚 Learning Objectives

By the end of this project, you should be able to confidently explain and demonstrate:

- Running JavaScript using Node.js
- Understanding the Node.js runtime environment
- Using CommonJS and ES6 modules
- Reading files with the `fs` module
- Accessing command-line arguments and environment variables using `process`
- Creating HTTP servers with Node.js
- Building APIs and routes using Express.js
- Understanding middleware and request/response flow
- Using Babel for modern ES6 syntax support
- Improving development workflow with Nodemon
- Writing basic backend tests with Mocha

---

# 🧠 Core Backend Concepts

## Node.js Runtime

Node.js allows JavaScript to run outside the browser using the V8 JavaScript engine.

This enables:

- filesystem access
- server creation
- process management
- operating system interaction

---

## Asynchronous Programming

Node.js is built around non-blocking I/O.

Understanding asynchronous flow is critical for:

- file operations
- databases
- APIs
- HTTP requests

---

## Express.js

Express simplifies backend server development by providing:

- cleaner routing
- middleware support
- easier request handling
- scalable architecture

---

# 📁 Project Structure

```text
.
├── 0-console.js
├── 1-stdin.js
├── 2-read_file.js
├── 3-read_file_async.js
├── 4-http.js
├── 5-http.js
├── 6-http_express.js
├── 7-http_express.js
├── full_server/
├── package.json
└── README.md
```

---

# ⚙️ Setup Instructions

## 1. Install Node.js

Verify installation:

```bash
node -v
npm -v
```

---

## 2. Install Dependencies

```bash
npm install
```

---

## 3. Run Files

```bash
node 0-console.js
```

---

## 4. Development Mode with Nodemon

```bash
npx nodemon 0-console.js
```

---

# 🧪 Testing

Using Mocha:

```bash
npm test
```

---

# 🛠 Recommended Workflow

## Start Development

```bash
chmod +x start.sh
./start.sh
```

---

# 🔥 Senior Developer Notes

Important concepts to master during this project:

- asynchronous flow
- request lifecycle
- modules/import/export
- HTTP fundamentals
- Express routing
- middleware execution order

Do not focus only on syntax.

Focus on understanding:

- why backend systems work this way
- how requests travel through the server
- how Node handles concurrency

These fundamentals are foundational for:

- REST APIs
- databases
- authentication systems
- real-world backend architecture

---

# 📌 Author

Holberton School Backend JavaScript Project
