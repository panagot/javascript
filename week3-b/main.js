//1 Strings

let myString  = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString );
console.log(myString.length);
console.log(myString.replace(/,/g, " "));

//2 Arrays

let favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];
favoriteAnimals.push('turtle');
console.log(favoriteAnimals);
favoriteAnimals.splice(1,0,"meerkat");
console.log("I believe the new arrary will contain 5 different animals");
console.log(favoriteAnimals);
console.log('The array has a length of: ' + favoriteAnimals.length);
favoriteAnimals.splice(3,1);
console.log(favoriteAnimals);
console.log(favoriteAnimals.indexOf("meerkat"));
console.log("meerkat is located on array index 1. I don't like it there so I will delete it");
favoriteAnimals.splice(1,1);
console.log(favoriteAnimals);

//More JavaScript

//1

function addsum (num1,num2,num3){
    return num1+num2+num3;
}
console.log(addsum(1,2,3));

//2

function colorCar (color){
    return "a " + color + " car"
}
console.log(colorCar("red"));

//3

let car = {
    type:"jeep",
    doors:4,
    tyres:4,
}

function tox(p){
    return p
}

console.log(tox(car));

//4

function vehicleType(color,code){
   return code === 2 ? "A " + color + " motorbike" : "A " + color + " car";
}

console.log(vehicleType("blue",2));

//5

console.log( 3 ===3 ? "yes" : "no" );

//6

function vehicle(color,code,age){
    return code === 1 && age>=5 ? "A " + color + " used motorbike" : "A " + color + " new motorbike";
}

console.log(vehicle("blue",1,5))

//7

let arrayOfVehicles = ["motorbike", "caravan", "bike"];
console.log(arrayOfVehicles);

//8
console.log(arrayOfVehicles[2]);

//9
console.log(vehicle("green", 3, 1));

//10

var advertismentString = "Amazing Joe's Garage, we service .";

for (var item in arrayOfVehicles) {
    advertismentString += arrayOfVehicles[item] + 's.';
}

console.log(advertismentString);

//11
arrayOfVehicles.push("train");

console.log(arrayOfVehicles);

//12

let myemptyObject = {};
console.log(myemptyObject);

//13

let myteachersSoFar = {
    Ahmed: null,
    Panagiotis: null,
    Kostas: null,
    George: null
}

console.log(myteachersSoFar);

//14

myteachersSoFar = {
    Ahmed: "html",
    Panagiotis: "CSS",
    Kostas : "javascript",
    George :"javascript"
}

console.log(myteachersSoFar);

//15

let x = [1,2,3];
let y = [1,2,3];
let z = y;

function arraysEqual(a,b) {
    if (a == b) { 
    return true;
 }else {
    return false;
 }
}

function arraysEqual2(a,b) {
    if (a === b) { 
    return true;
 }else {
    return false;
 }
}

function arraysEqual3(a,b) {
    if (z == y) { 
    return true;
 }else {
    return false;
 }
}

function arraysEqual4(a,b) {
    if (z == x) { 
    return true;
 }else {
    return false;
 }
}

console.log(arraysEqual(x,y));

console.log(arraysEqual2(x,y));

console.log(arraysEqual3(x,y));

console.log(arraysEqual4(x,y));


//16
let o1 = { foo: 'bar' };
let o2 = { foo: 'bar' };
let o3 = o2;
console.log("o1: ", o1);
console.log("o2: ", o2);
console.log("o3: ", o3);

o1 = { pet:'animal'};
o2 = { food:'burger'};
console.log("o1: ", o1);
console.log("o2: ", o2);
console.log("o3 remains in the original o2: ", o3);




//17


let bar = 42;
console.log("Returns a String");
console.log(typeof (typeof bar));