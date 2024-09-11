1-Complete the sentence:

TypeScript allows developers to add types to JavaScript.


2-complete the setence:

JavaScript is a loosely typed language.


3-The TypeScript compiler can be configured with which file?

tsconfig.json


4- There are two main ways TypeScript assigns a type:

explicit
implicit

5- Create a "firstName" variable, string type using Implicit type:

let firstName = "Dylan";

6-Create a "firstName" variable, string type using Explicit type:

let firstName: string = "Dylan";

7-Create an empty "myVar" variable, and disable type checking:

let myVar: any;

8- Create an empty "myVar" variable, and specify it should be an unknown type:

let myVar: unknown;

9- Prevent the array from being changed:

const names: readonly string[] = ["Dylan"];

10-The order of value types does not matter for Tuples:

false

11- Define ourTuple as string and boolean, in that order:

let ourTuple: [string, boolean];

12- Add the correct types for the object below:

const car: { type: string, model: string, year: number } = { type: "Toyota",
model: "Corolla",
year: 2009
};


13-Specify that the second property, called model, should be optional:

const car: { type: string, model?: string } = { type: "Toyota"
};


14-Create an enum called myEnum, with 2 constants (myFirstConst, mySecondConst) with default values:

enum myEnum {
myFirstConst,
mySecondConst
};


15- Create an enum called myEnum, with 2 constants (myFirstConst, mySecondConst) with the string values "first" and "second":

enum myEnum {
myFirstConst = "first",
mySecondConst = "second"
};

16-Create a Type Alias for a string, called carType:

type carType = string

17-17-Create an interface called myInterface, with the property myProp as a string: 

interface my Interface {
myProp: string
}

18-Extend the myInterface interface from last exercise, and add a property myExtProp as a number:

interface myExtInterface extends myInterface {
myExtProp: number
}

19-Specify that the paramater "myVar" for the function can be either string or number:

function myFunc (myVar: string | number) {
console.log(myVar)
}

20- Create a function that returns the string "Learning is Fun!", with the return type explicitly defined:

function myFunc(): string {
return "Learning is Fun!";
}

21-Create a function that specifically does not return a value:

function myFunc(): void {
console.log("Learning is Fun!");
}
