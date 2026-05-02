
/**
 * Checks if all elements in the array exists in the set
 * @param {Set<any>} s - Set to check against
 * @param {Array<any>} arr - Sample Array that will be checked against the set
 * 
 * @returns {boolean} True if all elements exists in the set, otherwise false
 */

const hasValuesFromArray = (s, arr) => {
    for (const item of arr) {
        if (!s.has(item)) return false
    }
    return true
}

export default hasValuesFromArray