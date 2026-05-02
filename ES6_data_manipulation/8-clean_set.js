
/**
 * Creates a string of all the setvalues that start at a specified string
 * 
 * @param {String} startString - Given string to check set values
 * @param {Set<string>} st- Set of strings to check if it has startString values
 * 
 * @returns {String} - String separated by '-'  that starts with startString
 */

const cleanSet = (st, startString) => {
    if (startString === '') return ''
    let clean = []
    for (const item of st) {
        if (item.startsWith(startString)) {
            let sliced = item.slice(startString.length)
            clean.push(sliced)
        }
    }
    return clean.join('-')
}

export default cleanSet