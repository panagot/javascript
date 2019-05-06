//Task 1

console.log('hello');

let numbers = [1, 2, 3, 4];
let newNumbers = [];

for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] % 2 !== 0) {
        newNumbers.push(numbers[i] * 2);
    }
}

console.log("The doubled numbers are", newNumbers); // [2, 6]


let numbersx = [1, 2, 3, 4];


//filter odd numbers using .filter
var numbersx2 = numbersx.filter(number => number%2!==0);
console.log("Filtering the odd numbers", numbersx2);


//multiplying number with .map
const map1 = numbersx2.map(x => x * 2);

console.log("Using MAP the doubled numbers become" , map1);

//Task 2



let monday = [
  {
      name     : 'Write a summary HTML/CSS',
      duration : 180
  },
  {
      name     : 'Some web development',
      duration : 120
  },
  {
      name     : 'Fix homework for class10',
      duration : 20
  },
  {
      name     : 'Talk to a lot of people',
      duration : 200
  }
];

let tuesday = [
  {
      name     : 'Keep writing summary',
      duration : 240
  },
  {
      name     : 'Some more web development',
      duration : 180
  },
  {
      name     : 'Staring out the window',
      duration  : 10
  },
  {
      name     : 'Talk to a lot of people',
      duration : 200
  },
  {
      name     : 'Look at application assignments new students',
      duration : 40
  }
];

let tasks = monday.concat(tuesday);

//viewing original 2 arrays
console.log(tasks);

//Viewing Monday with Map.
let MondayTask = monday.map(monday  =>monday.name);
console.log("The tasks of Monday are the following:", MondayTask);

//Viewing Tuesday with Map.
let TuesdayTask = tuesday.map(tuesday  =>tuesday.name);
console.log("The tasks of Tuesday are the following:", TuesdayTask);

//Viewing combined Monday and Tuesday
let combinedTasks = MondayTask + TuesdayTask;

console.log("The combined tasks for Monday and Tuesday are the following:",  combinedTasks);


//converting minutes to hours
monday.map(monday => monday.duration /=60);
tuesday.map(tuesday => tuesday.duration /=60);


//filter numbers that took 2 hours or more
let mondayDurationLessThan2Hours = monday.filter(function(val){
    return val.duration <= 2;
})

let tuesdayDurationLessThan2Hours = tuesday.filter(function(val){
    return val.duration <= 2;
})

console.log(mondayDurationLessThan2Hours);
console.log(tuesdayDurationLessThan2Hours);


//Multiply hour billing for Monday
let costForMonday = mondayDurationLessThan2Hours.map( cost => cost.duration * 50);
console.log(costForMonday);

//Total cost for Monday
let accumulateMondayCost = costForMonday.reduce((acc,cur) => acc + cur);
console.log("Total cost for Monday is " , accumulateMondayCost, "Euros");



//Multiply hour billing for Tuesday
let costForTuesday = tuesdayDurationLessThan2Hours.map( cost => cost.duration * 80);
console.log(costForTuesday);


//Total cost for Tuesday
let accumulateTuesdayCost = costForTuesday.reduce((acc,cur) => acc + cur);
console.log("Total cost for Tuesday is " , accumulateTuesdayCost, "Euros");

//Total cost for the 2 days

let TotalCost = accumulateMondayCost + accumulateTuesdayCost ;
console.log("The total cost for the 2 days is", TotalCost, "Euros");

