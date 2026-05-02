#!/usr/bin/env node
/**
 * Returns an array of objects who are located in a specific city
 *
 * @params {Array:object} students - An array of student objects
 * @params {String} city - The city to filter students by
 *
 * @returns {Array:object} An array of student objects who are located in the specified city
 *
 */

export default function getStudentsByLocation(students, str) {
  return students.filter((student) => student.location == str);
}
