#!/usr/bin/env node
/**
 * Returns an array of ids from a list of objects
 *
 * @params {Array:object} students - An array of student objects
 *
 * @returns {Array:number} An array of student ids
 */

export default function getListStudentIds(students) {
  if (!Array.isArray(students)) {
    return [];
  } else {
    return students.map((student) => student.id);
  }
}
