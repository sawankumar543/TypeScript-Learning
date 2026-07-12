"use strict";
// * TypeScript Enums
// An enum is a special "class" that represents a group of constants (unchangeable variables).
// Enums come in two flavors string and numeric.
// Let's start with numeric.
Object.defineProperty(exports, "__esModule", { value: true });
// Numeric Enums - Default
// By default, enums will initialize the first value to 0 and add 1 to each additional value:
var CardinalDirections;
(function (CardinalDirections) {
    CardinalDirections[CardinalDirections["EAST"] = 0] = "EAST";
    CardinalDirections[CardinalDirections["WEST"] = 1] = "WEST";
    CardinalDirections[CardinalDirections["NORTH"] = 2] = "NORTH";
    CardinalDirections[CardinalDirections["SOUTH"] = 3] = "SOUTH";
})(CardinalDirections || (CardinalDirections = {}));
let currentDirection = CardinalDirections.NORTH;
console.log(currentDirection);
// Numeric Enums - Initialized
// You can set the value of the first numeric enum and have it auto increment from that:
var CardinalDirections1;
(function (CardinalDirections1) {
    CardinalDirections1[CardinalDirections1["EAST"] = 10] = "EAST";
    CardinalDirections1[CardinalDirections1["WEST"] = 11] = "WEST";
    CardinalDirections1[CardinalDirections1["NORTH"] = 12] = "NORTH";
    CardinalDirections1[CardinalDirections1["SOUTH"] = 13] = "SOUTH";
})(CardinalDirections1 || (CardinalDirections1 = {}));
console.log(CardinalDirections1.EAST);
console.log(CardinalDirections1.SOUTH);
console.log(CardinalDirections1.NORTH);
// Numeric Enums - Fully Initialized
// You can assign unique number values for each enum value.
// Then the values will not be incremented automatically:
var CardinalDirections2;
(function (CardinalDirections2) {
    CardinalDirections2[CardinalDirections2["EAST"] = 10] = "EAST";
    CardinalDirections2[CardinalDirections2["WEST"] = 28] = "WEST";
    CardinalDirections2[CardinalDirections2["NORTH"] = 23] = "NORTH";
    CardinalDirections2[CardinalDirections2["SOUTH"] = 99] = "SOUTH";
})(CardinalDirections2 || (CardinalDirections2 = {}));
console.log(CardinalDirections2.NORTH);
console.log(CardinalDirections2.SOUTH);
// String Enums
// Enums can also contain strings.
// This is more common than numeric enums, because of their readability and intent.
var CardinalDirections3;
(function (CardinalDirections3) {
    CardinalDirections3["EAST"] = "East";
    CardinalDirections3["WEST"] = "West";
    CardinalDirections3["NORTH"] = "North";
    CardinalDirections3["SOUTH"] = "South";
})(CardinalDirections3 || (CardinalDirections3 = {}));
console.log(CardinalDirections3.EAST);
//# sourceMappingURL=enum.js.map