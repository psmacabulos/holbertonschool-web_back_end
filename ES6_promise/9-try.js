/**
 * Executes a function safely and ensures final processing.
 *
 * @param {Function} mathFunction - Function to execute
 * @returns {Array} Queue containing result or error and final message
 */
export default function guardrail(mathFunction) {
    const queue = [];

    try {
        const result = mathFunction();
        queue.push(result);
    } catch (error) {
        queue.push(error.toString());
    } finally {
        queue.push('Guardrail was processed');
    }

    return queue;
}