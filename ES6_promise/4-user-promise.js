/**
 * Returns a resolved Promise containing user data.
 *
 * @returns {Promise<Object>} Resolves with user information
 */
export default function signUpUser(firstName, lastName) {
    return Promise.resolve({
        firstName,
        lastName,
    });
}