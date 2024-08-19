"use strict";
// 1. Basic Data Types
Object.defineProperty(exports, "__esModule", { value: true });
// a. number: Represents both integers and floating-point numbers
let num = 42;
let floatNum = 3.14;
// b. string: Represents text data
let str = "Hello, TypeScript!";
// c. boolean: Represents true or false values
let isActive = true;
// d. null: Represents the intentional absence of any object value
let nullValue = null;
// e. undefined: Represents an uninitialized variable
let undefinedValue = undefined;
// f. void: Represents the absence of any type, typically used in functions that do not return a value
function logMessage(message) {
    console.log(message);
}
// g. symbol: Represents unique and immutable identifiers
let uniqueId = Symbol("id");
// h. bigint: Used for large integers beyond the safe integer limit for number
// let bigIntValue: bigint = 9007199254740991n;
// 2. Array Types
// a. Array: A collection of elements of the same type
let numbers = [1, 2, 3, 4, 5];
// b. Tuple: A fixed-length array with specified types for each element
let person = ["John", 25];
// 3. Object Types
// a. object: Represents any non-primitive type
let personObj = { name: "John", age: 30 };
// b. Record: Represents an object type with keys of type K and values of type T
let user = {
    name: "Alice",
    role: "Admin"
};
// 4. Advanced Types
// a. any: Disables type checking, allowing any type of value
let randomValue = "Hello";
randomValue = 42; // No type error
// b. unknown: A safer alternative to any, requiring type assertions before usage
let unknownValue = "Hello";
if (typeof unknownValue === "string") {
    console.log(unknownValue.toUpperCase());
}
// c. never: Represents the type of values that never occur, often used for functions that always throw an error or never return
function throwError(message) {
    throw new Error(message);
}
// d. union: Allows a variable to have multiple possible types
let value;
value = "Hello";
value = 42;
let employee = {
    name: "Alice",
    id: 1
};
console.log(employee);
// f. literal: Specifies an exact value a variable can have
let direction = "up";
// g. enum: Enumerates a set of named constants
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let color = Color.Green;
let result = "Test";
// 5. Function Types
// a. Function: Defines a function signature with argument and return types
let add;
add = (x, y) => {
    return x + y;
};
// 6. Type Assertions
// a. as: Type assertions help the compiler know about the type
let someValue = "Hello, World!";
let strLength = someValue.length;
// b. <Type>: Another way of performing type assertions
let someValueLength = someValue.length;
// 7. Optional and Default Parameters
// a. Optional Parameters: Parameters that are not required
function greet(name, age) {
    return `Hello, ${name}`;
}
// b. Default Parameters: Parameters with default values
function greetWithDefault(name, age = 30) {
    return `Hello, ${name}, you are ${age} years old.`;
}
