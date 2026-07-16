// * TypeScript Type Aliases and Interfaces
// TypeScript allows types to be defined separately from the variable that use them.
// Aliases and Interfaces allow types to be easily shared between different variables/objects.

// * Type Aliases
// Type Aliases allow defining types with a custom name(an Alias).
// Type Aliases can be used for primitives like string or more complex types such as objects and arrays:

type UserType = {
    username: string;
    age: number;
    city: string;
    isMarried?: boolean;
}
type UserType2 = {
    username: string;
    age: number;
    city: string;
    isMarried?: boolean;
}

const user1: UserType = {
    username: "John", 
    age : 19,
    city : "Meerut",
    isMarried: false,
}

const user2: UserType = {
    username: "John Wick", 
    age : 39,
    city : "New York",
}

// * Union and Intersection Types

// Intersection
type Animal = {
    name: string;
}
type Bear = Animal & {
    isHoney: boolean;
}

const bear1: Bear = {
    name: "Bablu",
    isHoney: true,
}

const bear2: Bear = {
    name: "Dablu",
    isHoney: false,
}

// Union
type Status = "success" | "error";

let response: Status = "success";


// * Interfaces
// Interfaces are similar to type aliases, except they only apply to object types.

interface Rectangle {
    height: number;
    width: number;
}

const rectangle: Rectangle = {
    height: 20,
    width: 23,
}

// Merging
interface Animal1 {
    name: string;
}

interface Animal1 {
    age: number;
}

const dog: Animal1 = {
    name: "Puppy",
    age: 3,
}

//* Type vs Interface: Key Differences

// Extending: Both can be extended, but interfaces support declaration merging.
// Unions/Intersections: Only type aliases support union and intersection types.
// Implements: Classes can implement either.
// Recommendation: Use interface for objects, type for everything else.

// Best Practices:
// Use interface for defining object shapes and public APIs.
// Use type for unions, intersections, and primitives.
// Favor composition over inheritance for types.
// Document your types and interfaces for clarity.

// Common Pitfalls:
// Using type when you need declaration merging (use interface).
// Overcomplicating types-keep them simple and focused.
// Forgetting to update types/interfaces as code evolves.


// Extending Interfaces
// Interfaces can extend each other's definition.
// Extending an interface means you are creating a new interface with the same properties as the original, plus something new.

interface ColoredRectangle extends Rectangle {
    color: string;
}

let coloredRectangle: ColoredRectangle = {
    height: 22,
    width: 99,
    color: "red",
}