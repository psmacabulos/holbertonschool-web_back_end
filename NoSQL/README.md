# NoSQL MongoDB Project

## 📚 Description
This project covers fundamental concepts of NoSQL databases and MongoDB,
including CRUD operations, aggregation, and Python integration using PyMongo.

---

## 🎯 Learning Objectives

At the end of this project, you should be able to explain:

- What NoSQL means
- Difference between SQL and NoSQL
- What ACID is
- What document storage is
- Types of NoSQL databases
- Benefits of NoSQL
- How to query data in MongoDB
- How to insert, update, and delete data
- How to use MongoDB with Python

---

## 🛠 Requirements

### MongoDB
- Ubuntu 20.04
- MongoDB 4.4
- Files end with a newline
- First line: `// comment`

### Python
- Python 3.9
- PyMongo 4.8.0
- First line: `#!/usr/bin/env python3`
- PEP8 compliant
- All modules/functions documented
- Use `if __name__ == "__main__"`

---

## 📁 Project Structure

- `*.js` → MongoDB shell scripts
- `*.py` → Python scripts using PyMongo
- `README.md` → Project documentation

---

## 🚀 Usage

Start MongoDB:

```bash
sudo service mongod start
```

Run a MongoDB script:

```bash
mongo < script.js
```

Run a Python script:

```bash
python3 script.py
```

---

## 🧠 Notes

- MongoDB stores data as JSON-like documents
- Queries return cursors, not lists
- Always use $set when updating fields
- No fixed schema (flexible structure)

