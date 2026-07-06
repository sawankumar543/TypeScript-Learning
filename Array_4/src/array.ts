// * TypeScript Arrays
// TypeScript has a specific syntax for typing arrays.
// Example
const names: string[] = [];
names.push("Dylan"); // no error
// names.push(3); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.

// * Readonly
// The readonly keyword can prevent arrays from being changed.
const names2: readonly string[] = ["Dylan"];
//names2.push("Jack"); // Error: Property 'push' does not exist on type 'readonly string[]'.
// try removing the readonly modifier and see if it works?


// * Type Inference
// TypeScript can infer the type of an array of it has values

const numbers = [1,2,3]; // inferred to type number[]
numbers.push(4); // no error
// numbers.push("2"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.

if(typeof numbers[0] === 'number') {
    let head: number = numbers[0]; // no error
}
