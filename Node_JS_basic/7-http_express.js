const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 1245;
const DATABASE = process.argv[2];
const greeting = 'Hello Holberton School!';
const heading = 'This is the list of our students';

// function to read the database
const countStudents = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
      return;
    }
    const lines = data.split('\n').filter((line) => line.trim() !== '');
    const students = lines.slice(1);
    let result = `Number of students: ${students.length}`;

    const subjects = {};

    students.forEach((student) => {
      const details = student.split(',');
      const name = details[0];
      const subject = details[3];

      if (!subjects[subject]) {
        subjects[subject] = [];
      }
      subjects[subject].push(name);
    });

    Object.entries(subjects).forEach(([subject, studentList]) => {
      result += `\nNumber of students in ${subject}: ${studentList.length}. List: ${studentList.join(', ')}`;
    });
    resolve(result);
  });
});

app.get('/', (req, res) => {
  res.send(greeting);
});

app.get('/students', (req, res) => {
  res.status(200).type('txt');
  countStudents(DATABASE)
    .then((result) => res.end(`${heading}\n${result}`))
    .catch((err) => res.end(`${heading}\n${err.message}`));
});

app.use((req, res) => {
  res.status(200).send(greeting);
});

app.listen(PORT);
