#!/usr/bin/env node
/**
 * Creates an updated map for items with initial quantity of 1
 * 
 * @param {Map} m - Given map
 * 
 * @returns {Map} - For each entry of the  map where quantity is 1
 * the returned qty will be updated to 100
 * Description:
 */

export default function updateUniqueItems(m) {
    if (!m instanceof Map) {
        throw new Error("Cannot process")
    }
    for (const [key, value] of m.entries()) {
        if (value === 1) {
            m.set(key, 100)
        }
    }
}
