# ES6 Data Manipulation & Data Structures

## 📌 Overview

This project focuses on mastering modern JavaScript data manipulation
techniques and core data structures introduced in ES6.

It emphasizes functional programming patterns and efficient handling of
collections using:

-   Array methods (`map`, `filter`, `reduce`)
-   Typed Arrays
-   Set and Map data structures
-   WeakMap

------------------------------------------------------------------------

## 🎯 Learning Objectives

By the end of this project, you should be able to explain:

-   How to use `map`, `filter`, and `reduce` for data transformation
-   The concept and use cases of typed arrays
-   Differences between `Set`, `Map`, and `WeakMap`
-   When to choose one data structure over another
-   How to write clean, functional-style JavaScript code

------------------------------------------------------------------------

## 🛠️ Requirements

-   Ubuntu 20.04 LTS
-   Node.js 20.x.x
-   npm 9.x.x
-   Code editors: `vi`, `vim`, `emacs`, `VS Code`

------------------------------------------------------------------------

## ⚙️ Setup

Install dependencies:

``` bash
npm install
```

Run tests:

``` bash
npm run test
```

Run full validation (tests + lint):

``` bash
npm run full-test
```

------------------------------------------------------------------------

## 📂 Project Structure

  File                        Description
  --------------------------- -----------------------------------
  0-get_list_students.js      Returns a list of student objects
  1-get_list_student_ids.js   Extracts student IDs
  2-get_students_by_loc.js    Filters students by location
  3-get_ids_sum.js            Computes sum of student IDs
  4-update_grade_by_city.js   Updates student grades by city
  5-typed_arrays.js           Introduction to typed arrays
  6-set.js                    Creating and using Sets
  7-has_array_values.js       Checks values in Set
  8-clean_set.js              Cleans and formats Set values
  9-groceries_list.js         Uses Map structure
  10-update_uniq_items.js     Updates Map values

------------------------------------------------------------------------

## 🧠 Key Concepts

### Functional Programming with Arrays

``` js
array
  .filter(...)
  .map(...)
  .reduce(...)
```

------------------------------------------------------------------------

### Data Structures

-   **Array** → ordered collection\
-   **Set** → unique values only\
-   **Map** → key-value pairs with any key type\
-   **WeakMap** → memory-safe object key storage

------------------------------------------------------------------------

### Typed Arrays

Used for: - Binary data\
- Performance-critical operations\
- Low-level memory manipulation

------------------------------------------------------------------------

## ⚠️ Common Pitfalls

-   Forgetting `return` in arrow functions with `{}`\
-   Misusing `map` instead of `filter`\
-   Incorrect accumulator usage in `reduce`\
-   Confusing `Map` with object literals

------------------------------------------------------------------------

## 🚀 Author

-   Holberton School Student
