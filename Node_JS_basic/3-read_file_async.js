const fs = require('fs');

const countStudents = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
      return;
    }
    const lines = data.split('\n').filter((line) => line.trim() !== '');
    const students = lines.slice(1);
    console.log(`Number of students: ${students.length}`);

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
      console.log(`Number of students in ${subject}: ${studentList.length}. List: ${studentList.join(', ')}`);
    });
    resolve();
  });
});

module.exports = countStudents;
