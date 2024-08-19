// 1. Basic Data Types

// a. number: Represents both integers and floating-point numbers
let num: number = 42;
let floatNum: number = 3.14;

// b. string: Represents text data
let str: string = "Hello, TypeScript!";

// c. boolean: Represents true or false values
let isActive: boolean = true;

// d. null: Represents the intentional absence of any object value
let nullValue: null = null;

// e. undefined: Represents an uninitialized variable
let undefinedValue: undefined = undefined;

// f. void: Represents the absence of any type, typically used in functions that do not return a value
function logMessage(message: string): void {
    console.log(message);
}

// g. symbol: Represents unique and immutable identifiers
let uniqueId: symbol = Symbol("id");

// h. bigint: Used for large integers beyond the safe integer limit for number
// let bigIntValue: bigint = 9007199254740991n;


// 2. Array Types

// a. Array: A collection of elements of the same type
let numbers: number[] = [1, 2, 3, 4, 5];

// b. Tuple: A fixed-length array with specified types for each element
let person: [string, number] = ["John", 25];


// 3. Object Types

// a. object: Represents any non-primitive type
let personObj: object = { name: "John", age: 30 };

// b. Record: Represents an object type with keys of type K and values of type T
let user: Record<string, string> = {
    name: "Alice",
    role: "Admin"
};


// 4. Advanced Types

// a. any: Disables type checking, allowing any type of value
let randomValue: any = "Hello";
randomValue = 42;  // No type error

// b. unknown: A safer alternative to any, requiring type assertions before usage
let unknownValue: unknown = "Hello";
if (typeof unknownValue === "string") {
    console.log(unknownValue.toUpperCase());
}

// c. never: Represents the type of values that never occur, often used for functions that always throw an error or never return
function throwError(message: string): never {
    throw new Error(message);
}

// d. union: Allows a variable to have multiple possible types
let value: string | number;
value = "Hello";
value = 42;

// e. intersection: Combines multiple types into one
interface Person {
    name: string;
}
interface Employee {
    id: number;
}
let employee: Person & Employee = {
    name: "Alice",
    id: 1
};

console.log(employee)

// f. literal: Specifies an exact value a variable can have
let direction: "up" | "down" = "up";

// g. enum: Enumerates a set of named constants {Note: best practice is to use const before enum to avoid unwanted more code for clean and clear code}
enum Color {
    Red,
    Green,
    Blue
}
let color: Color = Color.Green; // 1


enum SlotBook {
    First = 1,
    Second = 2,
    Third = 3,
    Fourth = 4
}

const Booked_Slot = SlotBook.First

console.log(Booked_Slot) // 1


enum GenderChoice {
    Male = 'male',
    Female = 'female',
    Others = 'others'
}

const Gender_Slot = GenderChoice.Male

console.log(Gender_Slot) // male



// h. type alias: Creates a custom type with union types
type StringOrNumber = string | number;
let result: StringOrNumber = "Test";

const arr: (string | number | boolean)[] = [1,'2', true] // best practice
const arr1: any[] = [1,'2', true] // not suggested


type User = {
    userName: string,
    id: number
}

type Admin = {
    adminName: string,
    id: number
}

let chohan: User | Admin = {userName: 'koti-chohan', id:2100031265}

console.log(chohan) //  { "userName": "koti-chohan", "id": 2100031265} 

chohan = {adminName: 'koti-chohan-admin', id:2100031265}

console.log(chohan) // { "adminName": "koti-chohan-admin", "id":2100031265}


// 5. Function Types

// a. Function: Defines a function signature with argument and return types
let add: (a: number, b: number) => number;
add = (x, y) => {
    return x + y;
};


// 6. Type Assertions

// a. as: Type assertions help the compiler know about the type
let someValue: unknown = "Hello, World!";
let strLength: number = (someValue as string).length;

// b. <Type>: Another way of performing type assertions
let someValueLength: number = (<string>someValue).length;


// 7. Optional and Default Parameters

// a. Optional Parameters: Parameters that are not required
function greet(name: string, age?: number): string {
    return `Hello, ${name}`;
}

// b. Default Parameters: Parameters with default values
function greetWithDefault(name: string, age: number = 30): string {
    return `Hello, ${name}, you are ${age} years old.`;
}


export {}