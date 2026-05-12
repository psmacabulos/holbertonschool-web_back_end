import fs from 'node:fs';

export default function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');

    // Make an array of students
    let students = data.split('\n');
    let numberOfStudents = students.length - 1;

    // Create an array of students for each subject
    const cs = [];
    const swe = [];
    for (let student of students) {
      let details = student.split(',');
      if (details[details.length - 1] === 'CS') {
        cs.push(details[0]);
      } else if (details[details.length - 1] === 'SWE') {
        swe.push(details[0]);
      } else continue;
    }

    console.log(`Number of students: ${numberOfStudents} `);
    console.log(
      `Number of students in CS: ${cs.length}. List: ${cs.join(', ')}`,
    );
    console.log(
      `Number of students in SWE: ${swe.length}. List: ${swe.join(', ')}`,
    );
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}
