"use strict";
//* Type Casting
// There are times when working with types where it's necessary to override the type of a variable, such as when incorrect types are provided by a library.
// Casting is the process of overriding a type.
Object.defineProperty(exports, "__esModule", { value: true });
//* Casting with as
// A straightforward way to cast a variable is using the as keyword, which will directly change the type of the given variable
let x = "Hello";
let y = x.length;
console.log(y);
// Casting doesn't actually change the type of the data within the variable, for example the following code will not work as expected since the variable x still holds a number.
let z = 5;
console.log(z.length);
// TypeScript will still attempt to typecheck casts to prevent casts that don't seem correct, for example the following will throw a type error since TypeScript knows casting a string to a number doesn't make sense without converting the data:
// console.log((4 as string).length)
// The Force casting section below covers how to override this.
// Casting with <>
// Using <> works the same as casting with as.
let h = 'Hello';
// console.log((<string>h).length);
// This type of casting will not work with TSX, such as when working on React files.
//* Force casting
// To override type errors that TypeScript may throw when casting, first cast to unknown, then to the target type.
let num = "Hello";
console.log(num);
//# sourceMappingURL=index.js.map