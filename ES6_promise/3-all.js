import { uploadPhoto, createUser } from './utils.js'

/**
 * Handles multiple API requests concurrently.
 *
 * @param {Function} uploadPhoto - Function returning a Promise for photo upload
 * @param {Function} createUser - Function returning a Promise for user creation
 * @returns {Promise<Object>} Resolves with both results or null values on failure
 */
export default function handleProfileSignup() {
    return Promise.all([uploadPhoto(), createUser()])
        .then(([photo, user]) => (console.log(`${photo.body} ${user.firstName} ${user.lastName}`)
        ))
        .catch(() => (console.log("Signup system offline")
        )
        );
}