#!/usr/bin/env node
/**
 * Update the grade of students in a specific city.
 *
 * @param {Array<Object>} students - Array of student objects
 * @param {string} city - City to filter students by
 * @param {Array<Object>} newGrades - Array of objects containing studentID and grades
 *
 * @returns {Array<Object>} - Array of students with updated grades
 */

export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location == city)
    .map((student) => {
      const gradeObj = newGrades.find((grade) => grade.studentId == student.id);
      return {
        ...student,
        grade: gradeObj ? gradeObj.grade : 'N/A',
      };
    });
}
