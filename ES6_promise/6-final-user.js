import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

/**
 * Handles multiple promises and returns their settlement results.
 *
 * @param {string} firstName
 * @param {string} lastName
 * @param {string} fileName
 * @returns {Promise<Array>}
 */
export default function handleProfileSignup(firstName, lastName, fileName) {
    const promises = [
        signUpUser(firstName, lastName),
        uploadPhoto(fileName),
    ];

    return Promise.allSettled(promises).then((results) =>
        results.map((result) => {
            if (result.status === 'fulfilled') {
                return {
                    status: 'fulfilled',
                    value: result.value,
                };
            }
            return {
                status: 'rejected',
                value: result.reason.toString(),
            };
        })
    );
}