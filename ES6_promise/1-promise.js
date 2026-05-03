/**
 * Returns a Promise that resolves or rejects based on the input.
 *
 * @param {boolean} success - Determines if the Promise resolves or rejects
 * @returns {Promise<Object>} Resolves with success response or rejects with an Error
 */
export default function getFullResponseFromAPI(success) {
    return new Promise((resolve, reject) => {
        if (success) {
            resolve({ status: 200, body: 'Success' });
        } else {
            reject(new Error('The fake API is not working currently'));
        }
    });
}