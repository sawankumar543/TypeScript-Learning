// * TypeScript Enums
// An enum is a special "class" that represents a group of constants (unchangeable variables).
// Enums come in two flavors string and numeric.
// Let's start with numeric.

// Numeric Enums - Default
// By default, enums will initialize the first value to 0 and add 1 to each additional value:

enum CardinalDirections {
    EAST,
    WEST,
    NORTH,
    SOUTH
}

let currentDirection = CardinalDirections.NORTH;
console.log(currentDirection)


// Numeric Enums - Initialized
// You can set the value of the first numeric enum and have it auto increment from that:

enum CardinalDirections1 {
    EAST=10,
    WEST,
    NORTH,
    SOUTH
}

console.log(CardinalDirections1.EAST)
console.log(CardinalDirections1.SOUTH)
console.log(CardinalDirections1.NORTH)


// Numeric Enums - Fully Initialized
// You can assign unique number values for each enum value.
// Then the values will not be incremented automatically:

enum CardinalDirections2 {
    EAST=10,
    WEST=28,
    NORTH=23,
    SOUTH=99,
}

console.log(CardinalDirections2.NORTH)
console.log(CardinalDirections2.SOUTH)

// String Enums
// Enums can also contain strings.
// This is more common than numeric enums, because of their readability and intent.

enum CardinalDirections3 {
    EAST="East",
    WEST="West",
    NORTH="North",
    SOUTH="South",
}
console.log(CardinalDirections3.EAST)