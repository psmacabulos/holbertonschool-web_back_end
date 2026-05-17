const http = require('http');
const fs = require('fs');

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

const PORT = 1245;
const greeting = 'Hello Holberton School!';
const heading = 'This is the list of our students';
const database = process.argv[2];
const app = http.createServer((req, res) => {
  res.writeHead(200, { 'content-type': 'text/plain' });

  if (req.url === '/') {
    res.end(`${greeting}`);
  } else if (req.url === '/students') {
    countStudents(database)
      .then((result) => res.end(`${heading}\n${result}`))
      .catch((err) => res.end(`${heading}\n${err.message}`));
  } else {
    res.end(`${greeting}`);
  }
});

app.listen(PORT);
module.exports = app;
