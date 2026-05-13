const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');

    /*
     * Since data is a string, we split it into an array
     * separated by the newline character
     */
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    // Remove header
    const students = lines.slice(1);

    console.log(`Number of students: ${students.length}`);

    const fields = {};

    students.forEach((student) => {
      const details = student.split(',');

      const firstname = details[0];
      const field = details[3];

      // If the subject is not there create an empty array
      if (!fields[field]) {
        fields[field] = [];
      }

      // Add the names per subject
      fields[field].push(firstname);
    });

    /* 
     * Convert the object into an array and use destructuring
     *  to get the subject and names of students
     */
    Object.entries(fields).forEach(([field, names]) => {
      console.log(
        `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`,
      );
    });
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
