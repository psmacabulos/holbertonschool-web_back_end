#!/usr/bin/env node
/**
 * Computes the sum of all student ids
 *
 * @param {Array<Object>} students - Array of students
 *
 * @returns {number} - Sum of all student ids
 */

export default function getStudentsIdsSum(students) {
  return students.reduce((acc, curr) => acc + curr.id, 0);
}
