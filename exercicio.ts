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

