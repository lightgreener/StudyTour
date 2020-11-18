// # Warmup - Raindrops
//
// Write a Javascript program that will take a number (eg 28 or 1755 or 9, etc)
// and output the following:
//
// If the number contains 3 as a factor, output 'Pling'.
// If the number contains 5 as a factor, output 'Plang'.
// If the number contains 7 as a factor, output 'Plong'.
// If the number does not contain 3, 5, or 7 as a factor, output the number as a string.
//



const raindrops = function (number){

      if( number % 3 === 0){
          return 'Pling';
      } else if (number % 5 === 0){
          return 'Pling';
      } else if (number % 7 === 0){
          return 'Pling';
      }
        console.log(number);
}

console.log(raindrops(22));
console.log(raindrops(24));
console.log(raindrops(15));
console.log(raindrops(21));

// ### Examples
//
// 28 has 7 as a factor.
// In raindrop-speak, this would be a simple "Plong".
// 1755 has 3 and 5 as factors.
// In raindrop-speak, this would be a "PlingPlang".
// 34 has neither 3, 5 nor 7 as a factor.
// Raindrop-speak doesn't know what to make of that, so it just goes with
// the straightforward "34".

const sortingNum = function(number){
  const result1 = number%7;
  const result2 = number%3;
  const result3 = number%5;
}

// Day04 Warmup
//
// # Warmup - Serge Says
//
// Create a function so Sarge can respond!
//
// ## Examples
//
// - Serge answers 'Sure.' if you ask him a question.
//
// - He answers 'Woah, chill out!' if you yell at him (ALL CAPS).
//
// - He says 'Fine. Be that way!' if you address him without actually saying anything.
//
// - He answers 'Whatever.' to anything else.
//
// - Create a function that takes an input and returns Serge's response.
//

const sergeRespond = function (str) {
     if (str ==='Serge') {
       return 'sure';
     }else if (str === "SERGE") {
       return "Woah, chill out!";
     }else if (str ==='') {
       return 'Fine, Be that way';
     }else {
       return 'Whatever.'
     }
}

console.log(`${sergeRespond('Serge')}`);
console.log(`${sergeRespond('SERGE')}`);
console.log(`${sergeRespond('')}`);
console.log(`${sergeRespond('Sir')}`);
console.log(`${sergeRespond('morning')}`);



// ### 1. Create an array of the days of the week
// - Create a variable named `days_of_the_week` as an array of the following:
//     - Monday
//     - Tuesday
//     - Wednesday
//     - Thursday
//     - Friday
//     - Saturday
//     - Sunday
//
const arr = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];

const days_of_the_week = function (arrays) {
    let newString = '';
    for (var i = 0; i < arrays.length; i++) {
        newString = "- " + arrays[i] + "\n";
        console.log(newString);
    }
}

console.log(days_of_the_week(arr));



// ### 2. My calendar says the first day is Sunday...
// - Remove Sunday from the last postion and move it to the first position.  Use array methods.
//

// use pop(), unshift()
const newArr = [];
    newArr.push(arr[arr.length-1]);

    for (var i = 0; i < arr.length-1; i++) {
        newArr.push(arr[i]);
    }

 console.log(newArr);


// ### 3. Create a new array of the days of the week:
// - The first inner array should be the weekdays
// - The second inner array should be the weekend days
//

const weekdays = [];
const weekend = [];
    for ( var i = 0; i < newArr.length; i++ ) {
        if ( i === 0 || i === newArr.length -1 ){
             weekend.push(newArr[i]);
        }else{
        weekdays.push(newArr[i]);
        }
    }

 console.log(weekend);
 console.log(weekdays);



// ### 4. Remove either the weekdays or the weekends
// Your choice...
//
// ### 5. Sort the remaining days


// # Filter
//
// Your task is to remove all duplicate words from a string, leaving only single (first) words entries.
//
// ## Example:
//
// Input:
//
// 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'
//
// Output:
//
// 'alpha beta gamma delta'

let oldString = 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta';

let newString = '';

const oldArray = oldString.split(' ');

for (var i = 0; i < oldArray.length; i++) {
    if (!newString.includes(oldArray[i])) {
        newString += oldArray[i];
        newString += ' ';
    }
}
console.log(newString);
//
// # Bonus question
//
// Create a function that returns a string 'banana'. The catch is you can only use letters 'a' and 'b'.
const findBanana = function () {
    let a = 'a';
    let b = 'b';
    let combination = b + a;
    console.log("ba".repeat(3));
    console.log(combination.repeat(3));
}

findBanana();
// Super extra bonus points for proving "how well engineered Javascript really is".
//
