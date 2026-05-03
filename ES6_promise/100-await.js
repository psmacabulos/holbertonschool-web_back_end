import { uploadPhoto, createUser } from './utils.js';

/**
 * Uploads photo and creates user asynchronously.
 *
 * @returns {Promise<Object>} Object containing photo and user data,
 * or null values if any operation fails
 */
export default async function asyncUploadUser() {
    try {
        const [photo, user] = await Promise.all([
            uploadPhoto(),
            createUser(),
        ]);

        return {
            photo,
            user,
        };
    } catch (error) {
        return {
            photo: null,
            user: null,
        };
    }
}