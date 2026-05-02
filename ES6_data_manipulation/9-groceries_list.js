#!/usr/bin/env node
/**
 * Creates a Map of groceries list
 * 
 * @returns {Map} - Map {'Apples => 10, 'Tomatoes => 10}
 */

export default function groceriesList() {
    const groceries = new Map()
    groceries.set('Apples', 10)
    groceries.set('Tomatoes', 10)
    groceries.set('Pasta', 1)
    groceries.set('Rice', 1)
    groceries.set('Banana', 5)
    return groceries
}
