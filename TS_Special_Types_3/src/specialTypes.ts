// TypeScript Special Types
// TypeScript includes several special types that have specific behaviors in the type system.

// Note: These special types are part of TypeScript's type system and help make your code more type-safe and self-documenting.

// Type: any
// The any type is the most flexible type in TypeScript.
// It essentially tells the compile to skip type checking for a particular variable.
// While this can be useful in certain situations, it should be used sparingly as it bypasses TypeScript's type safety features.

// When to use any:
    // When migrating JavaScript code to TypeScript
    // When working with dynamic content where the type is unknown
    // When you need to opt out of type checking for a specific case

// The example below does not use any and will throw an error:

// Example without any
let u = true;
//u = "string"; // Error: Type 'string' is not assignable to type 'boolean'
//Math.round(u); // Error: Argument of type 'boolean' is not assignable to parameter of type 'number'

// Setting a variable to the special type any disables type checking:
let v: any = true;
v = 'string'; // no error as it can be "any" type
Math.round(v) // no error as it can be "any" type

// any can be a useful way to get past errors since it disables type checking, but TypeScript will not be able to provide type safety, and tools which rely on type data, such as auto completion, will not work.

// Remember, it should be avoided at "any"  cost...

// Type: unknown
// The unknown type is a type-safe counterpart of any.
// It's the way to say "this could be anything", so you must perform some type of checking before you use it".

// Key differences between unknown and any:
    // unknown must be type-checked before use
    // You can't access properties on an unknown type without type assertion
    // You can't call or construct values of type unknown

// TypeScript will prevent unknown types from being used without proper type checking, as shown in the example below:

let w: unknown = 1;
w = "string"; // no error

w = {
    runANonExistentMethod: () => {
        console.log("I think therefore I am")
    }
} as { runANonExistentMethod: () => void }

// w.runANonExistentMethod(); // Error: Object is of type 'unknown'.
if(typeof w === 'object' && w !== null) {
    (w as {runANonExistentMethod: Function}).runANonExistentMethod();
}

// When to use unknown:
    // When working with data from external sources (APIs, user input, etc.)
    // When you want to ensure type safety still allowing flexibility
    // When migrating from JavaScript to TypeScript in a type-safe way

// Type narrowing with unknown:
// You can narrow down the type of a unknown value using type guards:

function processValue(value: unknown) {
    if(typeof value === 'string') {
        // value is now treated as string
        console.log(value.toUpperCase());
    } else if(Array.isArray(value)) {
        // value is now treated as any[]
        console.log(value.length)
    }
}

// processValue(["sawan", 19, {name: "Gaurav", age: 20}])

// Type: never
// The never type represents the type of values that never occur.
// It's used to indicate that something never happens or should never happen.

// Common use cases for never:
    // Functions that never return (always throw an error or enter an infinite loop)
    // Type Guards that never pass type checking
    // Exhaustiveness checking in discriminated unions


// * Difference between void and any

// void: Iska matlab hai ki function apna kaam poora karega, lekin kuch bhi return nahi karega (jaise console par print karna).
// never: Iska matlab hai ki function kabhi khatam hi nahi hoga (ya toh woh error throw karega, ya infinite loop mein phans jayega).

// Example of never in action:
function throwError(message: string): never {
    throw new Error(message)
}


// 📊 Detail Comparison: Void vs Never
// 1. void (Kaam poora hoga, par return kuch nahi)
// Jab ek function normal tarike se shuru se aakhri line tak chalta hai, lekin koi value return nahi karta, toh hum void use karte hain. Agar aap use kisi variable mein store karenge, toh JavaScript mein woh undefined milega.
// Example:
// typescript

function logMessage(msg: string): void {
    console.log(msg); // Yeh apna kaam karke chupchaap khatam ho gaya.
}


// 2. never (Function kabhi poora hi nahi hoga)
// Yeh type tab use hota hai jab function ka aakhri bracket (}) kabhi execute hi na ho sake. Iske do hi main kaaran hote hain:
// Function koi Error throw kar de (jaise aapke code mein hai).
// Function ek Infinite Loop (while(true)) mein chala jaye.
// Example:
// typescript

function keepRunning(): never {
    while (true) {
        console.log("Yeh chalta hi rahega...");
    }
}

// 💡 Ek aasan analogy (Real-life Example)

// void ek khali dabba hai: Aapne ek dabba (function) khola, uske andar kuch nahi tha (no return value), aur aapne dabba band kar diya.

// never ek black hole hai: Aap us dabbe ke andar gaye, lekin aap kabhi baahar hi nahi aa paye kyunki dabba beech mein hi toot gaya (Error) ya aap gol-gol ghoomte reh gaye (Infinite Loop).


//  Exhaustiveness checking with discriminated unions

// Step 1: Pehle Shapes aur unke Types banate hain
// Hum teen shapes define karte hain: Circle, Square, aur Rectangle.

interface Circle {
    kind: "circle";
    radius: number;
}

interface Square {
    kind: "square";
    side: number;
}

interface Rectangle {
    kind: "rectangle";
    width: number;
    height: number;
}

// Teeno sahpes ka ek Union Type bana lete hain
type Shape = Circle | Square | Rectangle

// Step 2: Area nikalne ka function (never ke sath)
// Ab hum ek function likhenge jo sabhi shapes ka area calculate karega. Yahan hum default case mein never type ka use karenge taaki TypeScript compiler hamari madad kar sake.

function getArea(shape : Shape): number {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square": 
            return shape.side * shape.side;
        case "rectangle": 
            return shape.width * shape.height;
        default: 
            // Yahan hota hai 'never' ka asli jadu!
            const _exhaustiveCheck: never = shape;
            return _exhaustiveCheck;
}}

getArea({
    kind: "circle",
    radius: 33,
})

// 🧐 Yeh default case mein never kaise kaam kar raha hai? (Detail Breakdown)
// TypeScript ke compiler ke dhyan se sochiye:
// Jab aapne upar Shape type pass kiya, toh compiler ko pata hai ki shape ki value ya toh circle hogi, ya square, ya rectangle.
// Jab switch case chalega, agar value circle hui, toh pehla case chal jayega. square hui toh dusra, rectangle hui toh teesra.
// Agar switch case ne saare 3 cases check kar liye, toh default case tak pahunchne ke liye kuch bacha hi nahi.
// Kyunki ab koi shape bachi hi nahi hai, isliye TypeScript samajhta hai ki default block mein shape ka type ab never ho chuka hai.
// Isliye const _exhaustiveCheck: never = shape; bina kisi error ke compile ho jata hai.


// 🚨 Asli Fayda: Jab Future mein code badlega (The "Safety Net")
// Maan lijiye 6 mahine baad aapke manager ne kaha, "App mein ek naya shape Triangle bhi add karo!"
// Aapne chupchaap code ke upar jaakar Triangle add kar diya:
// typescript
interface Triangle {
    kind: "triangle";
    base: number;
    height: number;
}

// Union type ko update kiya
type Shape2 = Circle | Square | Rectangle | Triangle; 

// Jaise hi aap yeh karenge, TypeScript aapke getArea function mein turant ek RED ERROR dikhane lagega! ❌
// Kyun aayi error?
// Kyunki ab switch case mein aapne circle, square, aur rectangle toh check kiya, lekin triangle ko check karna bhool gaye.
// Ab compiler default case mein aayega aur dekhega:
// "Acha, saare shapes check nahi hue hain, abhi triangle bacha hai. Iska matlab shape ka type abhi never nahi hai, balki Triangle hai!"
// Aur kyunki aapne likha hai:
// const _exhaustiveCheck: never = shape; (Yaani aap ek Triangle ko never variable mein daal rahe hain), TypeScript chillayega:

// "Error: Type 'Triangle' is not assignable to type 'never'."
// Yeh error aapko fauran yaad dilayegi ki aapko getArea function ke andar case "triangle": bhi likhna padega. Jab tak aap use nahi likhenge, code compile hi nahi hoga. Isse production mein bugs aane ka khatra bilkul khatam ho jata hai.


// When to use never: 
    // For functions that will never return a value
    // In type guads that should never match
    // For exhaustive type checking in switch statements
    // In generic types to indicate certain cases are impossible

// Type: undefined & null
// In TypeScript, both undefined and null have their own types, just like string or number.
// By default, these types can be assigned to any other type, but this can be changed with TypeScript's strcit null checks.

// Kye points about undefined and null:
    // undefined means a variable has been declared but not assinged a value
    // null is an explict assignment that represents no value no object
    // In TypeScript, both have their own types: undefined and null repectively
    // With strictNullChecks ebabled, you must explicitly handle these types

// Basic Usage
let y: undefined = undefined;
let x

// ye dono same hai
console.log(y) // output: undefined
console.log(x) // output: undefined

let z: null = null;

// Optional Parameters and Properties

// Optional parameter (implicityly `string | undefiend`)

function greet(name?: string) {
    return `Hello , ${name || 'stranger'}`
}

// Optional property in an interface
interface User {
    name: string;
    age?: number; // Same as 'number | undefined'
}



// Nullish Coalescing and Optional Chaining
// Nullish coalescing (??) - only uses default if value is null or undefined
let input = 'sawan';

const value = input ?? 'default';

// Optional chaining (?.) - safely access nested properties

const user = {
    address: {
        street: 'choti gali'
    }
}
// console.log(user?.address?.street);

// Important: These types are not most useful when strictNullChecks in enabled in your tsconfig.json file.

// This ensures that null and undefined are only assignable to themselves and any.
// to enable strict null checks, add this to your tsconfig.json
// {
//   "compilerOptions": {
//     "strictNullChecks": true
//   }
// }