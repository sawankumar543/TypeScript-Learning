"use strict";
//* TypeScript Union Types
// Union types are used when a value can be more than a single type.
// Such as when a property would be string or number.
Object.defineProperty(exports, "__esModule", { value: true });
// Union | (OR)
// Using the | we are saying our parameter is a string or number:
function printStatusCode(code) {
    console.log(`My status code is ${code}.`);
}
printStatusCode(404);
printStatusCode("404");
// Union Type Errors
// Note: you need to know what your type is when union types are being used to avoid type errors:
// Example
function printStatusCode1(code) {
    console.log(`My status code is ${code.toUpperCase()}.`); // error: Property 'toUpperCase' does not exists on type 'string | number' Property 'toUpperCase' does not exists on type 'number'
}
//# sourceMappingURL=union.js.map