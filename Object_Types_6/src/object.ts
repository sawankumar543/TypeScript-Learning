//* TypeScript Object Types
// TypeScript has a specific syntax for typing objects.

const car: {
    type: string,
    model: string,
    year: number,
} = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
}

// * Type Inference
// TypeScript can infer the types of properties based on their values.

const car1 = {
    type: "Toyota"
}

car1.type = "Ford"; // No Error
//car1.type = 22; // Error: Type 'number' is not assignable to type 'string'.


// * Optional Properties
// Optional properties are properties that don't have to be defined in the object definition.

type CarType = {
    type: string,
    mileage?: number
}

const car2: CarType = {
    type: "Toyota", 
    mileage: 40
}
const car3: CarType = {
    type: "Toyota", 
}

//* Index Signatures
// Index signatures can be used for objects without a defined list of properties.
// "Index signatures का उपयोग उन objects के लिए किया जा सकता है जिनकी properties की list पहले से defined नहीं होती है।"

const nameAgeMap: {[index: string]: number} = {};
nameAgeMap.Zaid = 28;
nameAgeMap.Sawan = 22;
nameAgeMap.Gaurav = 23;

console.log(nameAgeMap)