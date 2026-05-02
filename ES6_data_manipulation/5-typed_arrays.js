/**
 * Returns a new ArrayBuffer with an Int8 value at a specific position
 *
 * @param {number} length - Size of the buffer in bytes
 * @param {number} position - Index where the value will be written
 * @param {number} value - Integer value to store
 *
 * @returns {ArrayBuffer} - The resulting ArrayBuffer
 */

export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);

  if (position >= length) {
    throw new Error('Position out of range');
  }
  const view = new DataView(buffer);

  view.setInt8(position, value);

  return view;
}
