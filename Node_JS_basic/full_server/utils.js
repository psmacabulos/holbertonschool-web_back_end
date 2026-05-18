import fs from 'fs';

// Read and group students from the CSV database.
const readDatabase = (path) =>
  new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }
      const lines = data.split('\n').filter((line) => line.trim() !== '');
      const students = lines.slice(1);
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

      resolve(subjects);
    });
  });

export default readDatabase;
