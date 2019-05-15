//A function that will run after 1 second. 

function doIt() {
    console.log('I am done');
}
setTimeout(doIt, 1000)


//A function that says which number is divisible with 3 or 5 in an array between 10 and 15.     

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
    // make array
        let myArray = [];
    for (i = startIndex; i <= stopIndex; i++) {
          if (i % 3 == 0){
          myArray.push(i);
          threeCallback(i);
        };
        if (i % 5 == 0) {
          myArray.push(i);  
          fiveCallback(i);
        };
    }
    return myArray;
}

console.log(threeFive(10, 15, 
    function(num) {
    console.log(num + ' is dividable by 3');},
    function (num) { 
    console.log(num + ' is dividable by 5');}));  


//A function that adds numbers on another function

function createBase(n) {
    return function addSix (z) {
    return (n+z) };
};


let addSix = createBase(6);
console.log(addSix(10)); 
console.log(addSix(21)); 


