// // 1. Simple Object
// // Defining a simple object with specific types for its properties.
// let person: { name: string; age: number; isStudent: boolean } = {
//     name: "Alice",
//     age: 25,
//     isStudent: true
// };

// // 2. Object Using an Interface
// // Creating an interface to define the structure of an object.
// interface Person {
//     name: string;
//     age: number;
//     isStudent: boolean;
// }

// let personObj: Person = {
//     name: "Bob",
//     age: 30,
//     isStudent: false
// };

// // 3. Nested Objects
// // Defining an object that contains another object as one of its properties.
// interface Address {
//     street: string;
//     city: string;
//     zipcode: number;
// }

// interface Employee {
//     name: string;
//     position: string;
//     address: Address;  // Nested object
// }

// let employee: Employee = {
//     name: "Charlie",
//     position: "Developer",
//     address: {
//         street: "123 Main St",
//         city: "Metropolis",
//         zipcode: 12345
//     }
// };

// // 4. Optional Properties in Objects
// // Using optional properties where some fields may or may not be present.
// interface User {
//     username: string;
//     email?: string;  // Optional property
// }

// let user1: User = {
//     username: "john_doe"
// };

// let user2: User = {
//     username: "jane_doe",
//     email: "jane@example.com"
// };

// // 5. Readonly Properties
// // Making properties in an object immutable after they are set.
// interface Car {
//     readonly brand: string;  // Readonly property
//     model: string;
// }

// let car: Car = {
//     brand: "Toyota",
//     model: "Corolla"
// };

// // car.brand = "Honda"; // Error: Cannot assign to 'brand' because it is a read-only property.
// car.model = "Camry"; // Allowed

// // 6. Dynamic Objects Using `Record`
// // Defining a dynamic object where keys are strings and values are also strings.
// let phonebook: Record<string, string> = {
//     "Alice": "123-456-7890",
//     "Bob": "987-654-3210"
// };

// phonebook["Charlie"] = "555-555-5555"; // Adding a new entry dynamically

// // 7. Objects with Index Signatures
// // Allowing an object to have any number of properties with string keys and string values.
// interface Dictionary {
//     [key: string]: string;  // Index signature
// }

// let dictionary: Dictionary = {
//     "hello": "A greeting",
//     "world": "The earth, together with all of its countries and peoples"
// };

// dictionary["typescript"] = "A typed superset of JavaScript"; // Adding new entries dynamically

// // 8. Objects with Methods
// // Defining an object that has functions as properties.
// interface Calculator {
//     add: (a: number, b: number) => number;
//     subtract: (a: number, b: number) => number;
// }

// let calculator: Calculator = {
//     add: (a, b) => a + b,
//     subtract: (a, b) => a - b
// };

// console.log(calculator.add(5, 3));       // Output: 8
// console.log(calculator.subtract(5, 3));  // Output: 2

// // 9. Complex Object with Multiple Data Types
// // Creating a complex object that includes arrays, nested objects, and methods.
// interface Developer {
//     name: string;
//     languages: string[];  // Array of strings
//     experience: number;
//     code: (language: string) => string;  // Method
// }

// let developer: Developer = {
//     name: "Eve",
//     languages: ["JavaScript", "TypeScript", "Python"],
//     experience: 5,
//     code: (language) => `Coding in ${language}`
// };

// console.log(developer.name);              // Output: Eve
// console.log(developer.languages[1]);       // Output: TypeScript
// console.log(developer.code("JavaScript")); // Output: Coding in JavaScript



// //10. arrow functions 
// let createUser_Object = (name:string, age?:number):{name:string, age?:number} => {
//     return {name}
// }

// let result = createUser_Object('koti_chohan')

// console.log(result)


// //11. Aliases

// type User = {
//     name: string,
//     age: number,
//     isValid: boolean
// }

// let Users: Array<User> = []


// function createUser(user: User): string {
//     Users.push(user)
//     return "User Created Successfully"
// }

// createUser({name : 'koti-chohan',age : 21, isValid : true})
// createUser({name : 'lahari',age : 20, isValid : true})


// console.log(Users)