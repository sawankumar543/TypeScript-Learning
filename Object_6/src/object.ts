// TypeScript Object Types
// TypeScript has a specific syntax for typing objects. You can define the shape of an object using an interface or a type alias. Here's an example of how to define an object type using an interface:

const car: {type: string, model: string, year: number} = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
}

// Object types like this can also be written separately, and even be reused, loot at interfaces for more details.

// Type Inference
// TypeScript can infer the types of properties based on their values.

const car1 = {
    type: "Toyota"
}
car.type = "ford"; // no error
//car.type = 2; // Error: Type 'number' is not assibnable to type 'string'.

// Optional Properties
// Optional properties are properties that don't have to be defined in the object definition.

const car2: {type: string, mileage?: number} = {
    type: "Toyota"
}
car2.mileage = 2000;

// Index Signatures
// Index signatures can be used for objects without a defined list of properties.
const nameAgeMap: { [index: string]: number } = {};
nameAgeMap.Jack = 25;
nameAgeMap.Jill = 30;
//namgeAgeMap.Mark = "Fifty"; // Error: Type 'string' is not assignable to type 'number'.

// index signatures can also be expressed with utility types like Record<K, T> where K is the type of the keys and T is the type of the values.
const nameAgeMap1: Record<string, number> = {};
nameAgeMap1.Jack = 25;
nameAgeMap1.Jill = 30;
//nameAgeMap1.Mark = "Fifty"; // Error: Type 'string' is not assignable to type 'number'.