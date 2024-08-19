"use strict";
// 1. Simple Object
// Defining a simple object with specific types for its properties.
let person = {
    name: "Alice",
    age: 25,
    isStudent: true
};
let personObj = {
    name: "Bob",
    age: 30,
    isStudent: false
};
let employee = {
    name: "Charlie",
    position: "Developer",
    address: {
        street: "123 Main St",
        city: "Metropolis",
        zipcode: 12345
    }
};
let user1 = {
    username: "john_doe"
};
let user2 = {
    username: "jane_doe",
    email: "jane@example.com"
};
let car = {
    brand: "Toyota",
    model: "Corolla"
};
// car.brand = "Honda"; // Error: Cannot assign to 'brand' because it is a read-only property.
car.model = "Camry"; // Allowed
// 6. Dynamic Objects Using `Record`
// Defining a dynamic object where keys are strings and values are also strings.
let phonebook = {
    "Alice": "123-456-7890",
    "Bob": "987-654-3210"
};
phonebook["Charlie"] = "555-555-5555"; // Adding a new entry dynamically
let dictionary = {
    "hello": "A greeting",
    "world": "The earth, together with all of its countries and peoples"
};
dictionary["typescript"] = "A typed superset of JavaScript"; // Adding new entries dynamically
let calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b
};
console.log(calculator.add(5, 3)); // Output: 8
console.log(calculator.subtract(5, 3)); // Output: 2
let developer = {
    name: "Eve",
    languages: ["JavaScript", "TypeScript", "Python"],
    experience: 5,
    code: (language) => `Coding in ${language}`
};
console.log(developer.name); // Output: Eve
console.log(developer.languages[1]); // Output: TypeScript
console.log(developer.code("JavaScript")); // Output: Coding in JavaScript
