// 1. Creating Arrays

// a. Simple Array of numbers
let numbers: number[] = [1, 2, 3, 4, 5]; // Array of numbers

// b. Simple Array of strings
let names: string[] = ["Alice", "Bob", "Charlie"]; // Array of strings

// c. Array Using Array<T> Syntax
let mixedArray: Array<number | string> = [1, "Alice", 2, "Bob"]; // Array with mixed types

// d. Multidimensional Array (Array of Arrays)
let matrix: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]; // 2D array (array of arrays)

// e. Empty Array and Adding Elements Later
let emptyArray: string[] = []; // Empty array

// Adding elements later
emptyArray.push("First Element"); // Adds "First Element" to the array
emptyArray.push("Second Element"); // Adds "Second Element" to the array

// 2. Adding Elements to Arrays

// a. Adding Elements to the End of the Array
numbers.push(6); // Adds 6 to the end of the array

// b. Adding Elements to the Beginning of the Array
names.unshift("Zara"); // Adds "Zara" to the start of the array

// c. Adding Elements at a Specific Position using Splice
mixedArray.splice(2, 0, "New Element"); // Adds "New Element" at index 2

// d. Concatenating Arrays
let moreNumbers: number[] = [7, 8, 9];
let combinedNumbers = numbers.concat(moreNumbers); // Combines both arrays

// e. Using the Spread Operator to Add Elements
let extendedNames = ["Eve", ...names, "Mallory"]; // Adds "Eve" at the beginning and "Mallory" at the end

// f. Using Array Length to Add Elements
numbers[numbers.length] = 7; // Adds 7 at the end of the array

// g. Adding Multiple Elements at Once
numbers.push(8, 9, 10); // Adds 8, 9, and 10 to the end of the array

// 3. Printing the Arrays to Check the Results

console.log("Numbers:", numbers); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log("Names:", names); // Output: ["Zara", "Alice", "Bob", "Charlie"]
console.log("Mixed Array:", mixedArray); // Output: [1, "Alice", "New Element", 2, "Bob"]
console.log("Matrix:", matrix); // Output: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
console.log("Empty Array after adding elements:", emptyArray); // Output: ["First Element", "Second Element"]
console.log("Combined Numbers:", combinedNumbers); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log("Extended Names with Spread:", extendedNames); // Output: ["Eve", "Zara", "Alice", "Bob", "Charlie", "Mallory"]
