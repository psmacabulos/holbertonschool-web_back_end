/**
 * Returns a rejected Promise with an error message.
 *
 * @param {string} fileName - Name of the file
 * @returns {Promise<Error>} Rejected Promise with error
 */
export default function uploadPhoto(fileName) {
    return Promise.reject(new Error(`${fileName} cannot be processed`));
}