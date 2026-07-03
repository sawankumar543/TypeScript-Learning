// 1. Boolean
// Represents true/false values.
// Used for flags, and conditions.

let isActive: boolean = true;
let hasPermission = false; // TypeScript infers 'boolean' type

// 2. Number
// Represents both integers and floating-point numbers
// TypeScript uses the same number type for all numeric values.

let decimal: number = 6;
let hex: number = 0xf00d;  // Hexadecimal
let binary: number = 0b1010; // Binary
let octal: number = 0o744; // Octal
let float: number = 3.14;  // Floating point


// 3. String
// Represents text data.
// Can use single quotes('), double quotes("), or backticks (`) for template literals

let color: string = "blue";
let fullName: string = 'John Doe';
let age: number = 30;
let sentence: string = `Hello, my name is ${fullName} and I'll be ${age+1} next year.`;

// 4. Bigint (ES2020+)
// Represents whole numbers larger than 2 ki power 53 - 1.
const hugeNumber = BigInt(9007199254740991);


// 5. Symbol
// Creates unique indentifiers
// Useful for creating unique property keys and constants

// Example -> 1
// 1. Ek unique symbol banaya id ke liye
const userIdSymbol: unique symbol = Symbol("userId");

// 2. TypeScript Interface banayi
interface User {
    name: string;
    [userIdSymbol]: number; // Symbol ko key banaya
}

// 3. Object create kiya
const employee: User = {
    name: "Rahul",
    [userIdSymbol]: 98765
};

// 4. Access kaise karein?
console.log(employee[userIdSymbol]); // Ekdam sahi chalega: 98765

// 5. Agar koi galti se 'userId' naam ka string use karega to?
// employee["userId"] = 11111; // ❌ TS Error: Type '{ name: string; ... }' has no property 'userId'