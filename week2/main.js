//1

console.log("Μιλάω ελληνικά!");
console.log("I speak english!");
console.log("Ich spreche deutch!");

//2
console.log("I'm awesome");

//3
var x;
console.log('The value of my variable x will be: Undefined');
console.log(x);
console.log('The value of my variable x will be: An integer');
var x = 5;
console.log(x);

//4

var str = "Hello";
console.log('The value of my variable "str" will be a string and it will say Hello');
console.log(str);
var str = "Goodbye";
console.log('The value of my variable "str" will say Goodbye');
console.log(str);

//5

var z = 7.25;
console.log(z);
var a = Math.round(z);
console.log(a);
var highestNum = Math.max(z,a);
console.log(highestNum);

//6

var newArray = [];
console.log('I believe that the new array will be empty');
console.log(newArray);
var favoriteAnimalArray = ['Lion', 'Elephant'];
console.log(favoriteAnimalArray);
console.log(favoriteAnimalArray.push('Monkey'));
console.log(favoriteAnimalArray);

//7

let myString = "this is a test";
console.log(myString);
console.log(myString.length);

//8

function compareVariables(a,b) {
    if (typeof a === typeof b) {
        console.log("Variable " + a + " and " + " variable " + b + " are the same type");
    }
    else {
        console.log("Variable " + a + " and " + " variable " + b + " are of different type");
    }
}

var b1 = "stringOne";
var b2 = "stringTwo";
var b3 = 1;
var b4 = 2;

console.log(b1);
console.log(b2);
console.log(b3);
console.log(b4);


console.log("I believe var b1 is a String");
console.log("I believe var b2 is a String");
console.log("I believe var b3 is an integer");
console.log("I believe var b4 is a integer");

console.log(typeof(b1));
console.log(typeof(b2));
console.log(typeof(b3));
console.log(typeof(b4));

compareVariables(b1,b2);
compareVariables(b3,b4);
compareVariables(b1,b3);
compareVariables(b1,b4);

//9

var x = 7;

console.log(x);
console.log("Variable x is equal to " + x);
var x = x % 3;
console.log("variable x will now give the remaining number if we devide 7 by 3 which should be equal to one")
console.log("print variable x");
console.log(x);
