/**
 * Handles a Promise and returns a standardized response.
 *
 * @param {Promise} promise - The Promise to handle
 * @returns {Promise<Object>} Resolves with status and data or error
 */
export default function handleResponseFromAPI(promise) {
    return promise
        .then(() => ({ status: 200, body: 'success' }))
        .catch(() => new Error())
        .finally(() => console.log("Got a response from the API")
        )
}