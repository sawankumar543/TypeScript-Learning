// * TypeScript Tuples
// Types Arrays
// A tuple is a typed array. with a pre-defined length and types for each index.
// Tuples are great because they allow each element in the array to be a known type of value.
// To define a tuple, specify the type of each element in the array

// Define our tuple
let ourTuple: [number, boolean, string];

// initialize correctly
ourTuple = [5, false, 'Coding God was here'];


// Even though we have a boolean, string, and number the order matters in our tuple and will throw an error.

// Readonly Tuple
// A good practice is to make your tuple readonly
// Tuples only have strongly defined types for the initial values:

// define our Tuple
let ourTuple2: [number, boolean, string];
// initialize correctly
ourTuple2 = [5, false, 'Coding God was here'];
// We have no type safety in our tuple for indexes 3+
ourTuple.push('Something new and wrong');
console.log(ourTuple2);

// You can see the new value
// Tuples only have strongly defined for the initial values:

// Example: 
// Define our readonly tuple
const ourReadonlyTuple: readonly [number, boolean, string] = [5, true, 'The Real Coding God'];

// Throws error as it is readonly
// ourReadonlyTuple.push('Coding God took a day off')

// If you have ever React before you have worked with tuples more than likely.
// useState returns a tuple of the value and a setter function.
// const [firstName, setFirstName] = useState("Dylan") is a common Example.
// Because of the structure we know our first value in our list will be a certain value type in this case a string and the second value a function.

// Named Tuples
// Named tuples allow us to provide context for our values at each index.
const graph: [number, number] = [55.2, 41.3];
const [x, y] = graph;

