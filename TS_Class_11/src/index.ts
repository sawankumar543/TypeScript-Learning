//*  TypeScript Classes
// TypeScript adds types and visibility modifiers to JavaScript classes.

// Members: Types
// The members of a class (properties & methods) are typed using type annotations, similar to variables.

class Person {
    private name: string;
    public constructor(name: string) {
        this.name= name
    }
    public greet(): string {
        return this.name;
    }
}

const person = new Person("John");
console.log(person.greet())

// The this keyword in a class usually refers to the instance of the class.\

// Parameter Properties
// TypeScript provides a convenient way to define class members in the constructor, by adding a visibility modifier to the parameter.

class Person2 {
    public constructor(private name: string ) {

    }
    public getName(): string {
        return this.name;
    }
}

const person2 = new Person2("John");
console.log(person2)


// Readonly
// Similar to arrays, the readonly keyword can prevent class members from being changed.

class Person3 {
    private readonly name: string;
    public constructor(name: string ) {
        this.name = name;
    }
    public getName(): string {
        return this.name;
    }
}
const person3 = new Person3("Jane")
// console.log(person3.getName());


// * Inheritance: Implements
// Interfaces can be used to define the type a class must follow through the implements keyword.
interface Shape {
    getArea: () => number;
}

class Rectangle implements Shape {
    constructor(protected readonly width: number,protected readonly height: number) {}
    getArea() {
        return this.width*this.height;
    }
}

const rec = new Rectangle(5, 22);
console.log(rec.getArea())
// A class can implement multiple interfaces by listing each one after implements, separated by a comma like so: class Rectangle implements Shape, Colored {

//* Inheritance: Extends
// Classes can extend each other through the extends keyword.
// A class can only extend one other class.

class Square extends Rectangle {
    constructor(width: number) {
        super(width, width)
    }
}
const sqr = new Square(22);
console.log(sqr.getArea())

// Override 
// When a class extends another class, it can replace the members of the parent class with the same name.

class Rectangle1 {
    public constructor (protected readonly width: number,protected readonly height: number){}
    public getArea(): number {
        return this.height * this.width;
    }
    public toString() {
        return `Rectangle [width=${this.width}, height=${this.height}]`
    }
}

class Square1 extends Rectangle1 {
    public constructor(width: number) {
        super(width, width)
    }
    public override toString() {
        return `Square[width=${this.width}]`;
    }
}

// Abstract Classes
// Classes can be written in a way that allows them to be used as a base class for other classes without having to implement all the members.
// This is done by using the abstract keyword.
// Members that are left unimplemented also use the abstract keyword.

abstract class Polygon {
    public abstract getArea(): number;
    public toString(): string {
        return `Polygon[area=${this.getArea()}]`
    }
}

class Rectangle2 extends Polygon {
    public constructor(protected readonly width: number,protected readonly height: number){
        super()
    }
    public getArea() {
        return this.width * this.height;
    }
}

// Abstract classes cannot be directly instantiated, as they do not have all their members implemented.