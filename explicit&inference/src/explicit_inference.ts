// TypeScript Explict Types and Inference

// Type Annotations and Inference
// 1. Explicit Typing: You explicitly declare the type of a variable
// 2. Type Inference: TypeScript automatically determines the type based on the assigned value

// When to Use Each Approach

// Use explicit types for:
   // Function parameters and return types
   // Object literals
   // When the initial value might not be the final type

// Use Type inference for:
   // Simple variable declarations with immediate assignment
   // When the type is obvious from the context


// Explicit Type Annotations
// Explicit typing means you tell TypeScript exactly what type a variable should be:

// String
let greeting: string = "Hello, TypeScript!";

// Number
let userCount: number = 42;

// Boolean
let isLoading: boolean = true;

// Array of Numbers
let scores: number[] = [100, 93, 93];

// Best Practice: Use explicit types for function parameters and return types to make your code more maintainble and self-documenting

// Function with Explicit Types
// Function with explicit parameter and return types
function greet(name: string): string {
    return `Hello, ${name}`
}

// TypeScript will ensure you pass the correct argument type
greet("Alice"); // Ok
//greet(42); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.

// Type Inference
// TypeScript can automatically determine (infer) the type of a variable based on its inital value

// TypeScript infers 'string'
let username = "alice";

// TypeScript infers 'number'
let score = 100;

// TypeScript infers return type as 'number'
function sub(a: number, b: number) {
    return a - b;
}

// Note: Type inference works best when variable are initialized at declaration.

// Don't do it ❌
// let person1;
// person = "gaurav"
// person = 33;

// Do it  ✅
let person2: string;
person2 = "gaurav"


// When Inference Shines

// Object Literal Inference

// TypeScript infers the shape of the object
const user =  {
    name: "Alice",
    age: 30,
    isAdmin: true
};

// TypeScript knows these properties exist
console.log(user.name); // Ok
//console.log(user.email); // Error: Property 'email' does not exist



// Watch Out: While type inference is convenient, being explicit with tyeps can make your code more maintainble, especially in larger codebases or public APIs.


// Type Safety in Action
// One of TypeScript's main benefits is catching type-related error during the development.

let username1: string = "alice";
//username1 = 42; // Error: Type 'number' is not assignable to type 'string'.

// Implicit Type Mismatch
let score1 = 100; // TypeScript infers 'number'
//score = "high"; // Error: Type 'string' is not assignable to type 'number'.


// JavaScript vs TypeScript
// In JavaScript, the following code would run without errors, potentially causing bugs:

// JavaScript Behavior
// // This is valid JavaScript but can lead to bugs
// function add(a, b) {
// return a + b;
// }

// console.log(add("5", 3)); // Returns "53" (string concatenation)

// TypeScript catches these issues at compile time:
// TypeScript Type Safety
function add(a: number, b: number): number {
    return a + b;
}

//console.log(add("5", 3)); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.



// When TypeScript Can't Infer Types

// While TypeScirpt's types inference is powerful, there are cases where it can't determine the correct type.
// In these situations, TypeScript falls back to the any type, which disables type checking.


// 1. JSON.parse return 'any' because the structure isn't know at compile time

const data = JSON.parse('{ "name": "Alice", "age": 30 }');

// 2. Vairables declared without initialization
let something; // Type is 'any'
something = 'hello';
something = 42; // No error

// Avoid any When Possible
// Using any disables TypeScript's type checking

// Instead, consider these alternatives:
    // Use type annotations
    // Create interfaces for complex object
    // Use type gurads for runtime type checking
    // Enble noImplicitAny in your tsconfig.json
