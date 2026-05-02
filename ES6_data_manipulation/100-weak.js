/**
 * Checks how many times an endpoint is called
 * 
 * @param {Object} endpoint - Endpoint object
 * @throws {Error} When the endpoint is queried 5 or more times
 * 
 */


export const weakMap = new WeakMap()

export function queryAPI(endpoint) {
    const count = weakMap.get(endpoint) || 0
    const newCount = count + 1;
    if (newCount >= 5) {
        throw new Error('Endpoint load is high')
    }

    weakMap.set(endpoint, newCount)
}
