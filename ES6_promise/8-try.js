/**
 * Safely executes a function and handles errors.
 *
 * @param {Function} func - Function to execute
 * @returns {*} Result of the function or Error object
 */
export default function divideFunction(numerator, denominator) {
    if (denominator === 0) {
        throw new Error('cannot divide by 0');
    }
    return numerator / denominator;
}