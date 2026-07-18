// * TypeScript Functions
// TypeScript has a specific syntax for typing function parameters and return values.
// ? Return Type
// The type of the value returned by the function can be explicitly defined.

function getNumber(): number {
    return 5;
}

// If no return type is defined, TypeScript will attempt to infer it through the types of the variables or expressions returned.

// Void Return Type
function greet(): void {
    console.log("Hello World!")
}

//*  Parameters
// Function parameters are typed with a similar syntax as variable declarations.

function multiply(num1: number, num2: number) {
    return num1 * num2;
}

// If no parameter type is defined, TypeScript will default to using any, unless additional type information is available as shown in the Default Parameters and Type Alias sections below.

//*
//  Optional Parameters
// By default TypeScript will assume all parameters are required, but they can be explicitly marked as optional.

function addition(a: number, b: number, c?: number) {
    return a+b;
}
addition(1,2);


//* Default Parameters
// For parameters with default values, the default value goes after the type annotation:

function pow(value: number, exponent: number = 2) {
    return value ** exponent;
}

pow(2)

// TypeScript can also infer the type from the default value.

// * Named Parameters
// Typing named parameters follows the same pattern as typing normal parameters.

function divide({dividend, divisor}: {dividend: number, divisor: number}) {
    return dividend / divisor;
}

// * Rest Parameters
// Rest parameters can be typed like normal parameters, but the type must be an array as rest parameters are always arrays.

// Example
function add2(num1: number, num2: number, ...rest: number[]) {
    return num1 + num2 + rest.reduce((a, b) => a + b, 0)
}

const result = add2(2, 2, 3, 4, 5)
console.log(result)

// Type Alias
type AddType = (number1: number, number2: number) => number;

const add4: AddType = (number1, number2) => {
    return number1 + number2;
}