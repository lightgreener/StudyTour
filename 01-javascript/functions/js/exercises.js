console.log("is this on");


//Store the following into variables: number of children, partner's name,
//geographic location, job title.
//Output your fortune to the screen like so:
// "You will be a X in Y, and married to Z with N kids."

const fatherName = "Nick";
const numChildren = 3;
const address = "Sydney";
const jobTitle = "artist";

let output = "you will be a "+jobTitle+ " in "+address+", and married to with "+numChildren+" kids.";
console.log(output);
/*
Store the current year in a variable.
Store their birth year in a variable.
Calculate their 2 possible ages based on the stored values.
Output them to the screen like so: "They are either NN or NN", substituting the values.
*/

const thisYear = 2020;
const dadBirthYear = 1990;
// const mumBirthYear = 1992;
// const firstKidBirth = 2012;
// const secondKidBirth = 2015;
// const thirdKidBirth = 2019;
const dadAge = 30;
// const mumAge = 28;


let output2 = "they are either "+dadAge;

/*
Store your current age into a variable.
Store a maximum age into a variable.
Store an estimated amount per day (as a number).
Calculate how many you would eat total for the rest of your life.
Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".

*/

const myAge =30;
const maxAge = 70;
const numOfDay =500;
const eatTotal = (maxAge -myAge)*500;

let output3 = "yout will need "+eatTotal+ "to last you until the ripe old age of "+maxAge;

/*
Store a radius into a variable.
Calculate the circumference based on the radius, and output "The circumference is NN".
Calculate the area based on the radius, and output "The area is NN".
*/

let radius = 20;
const PI = 3.1415;
const output4 = "the circumference is ";

//

// # Exercises: Functions
//
// ## The Fortune Teller
//
// Why pay a fortune teller when you can just program your fortune yourself?
//
// Write a function named tellFortune that:
// - takes 4 arguments: number of children, partner's name, geographic location, job title.
// - outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// - Call that function 3 times with 3 different values for the arguments.

const tellFortune =function (fatherName, numChildren,address, jobTitle){
    console.log(`You will be a ${jobTitle} in ${address}, and married to ${fatherName} with ${numChildren} kids.`)
  }
tellFortune(fatherName, numChildren,address, jobTitle);

// ## The Puppy Age Calculator
//
// You know how old your dog is in human years, but what about dog years? Calculate it!
//
// Write a function named calculateDogAge that:
// - takes 1 argument: your puppy's age.
// - calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
// - outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
// - Call the function three times with different sets of values.
// - Bonus: Add an additional argument to the function that takes the conversion rate of human to dog years.
//
const calculateDogAge = function(puppyAge){
      const yourDogAge = puppyAge *7;
      const doggiAge =`Your doggie is ${yourDogAge} years old in dog years!`;
      console.log(doggiAge);

}



// ## The Lifetime Supply Calculator
//
// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!
//
// Write a function named calculateSupply that:
// - takes 2 arguments: age, amount per day.
// - calculates the amount consumed for rest of the life (based on a constant max age).
// - outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// - Call that function three times, passing in different values each time.
// - Bonus: Accept floating point values for amount per day, and round the result to a round number.
//
// ## The Geometrizer
//
// Create 2 functions that calculate properties of a circle.
//
// Create a function called calcCircumfrence:
//
// - Pass the radius to the function.
// - Calculate the circumference based on the radius, and output "The circumference is NN".
//
// Create a function called calcArea:
//
// - Pass the radius to the function.
// - Calculate the area based on the radius, and output "The area is NN".
//
// ## The Temperature Converter
//
// It's hot out! Let's make a converter.
//
// Create a function called celsiusToFahrenheit:
// - Store a celsius temperature into a variable.
// - Convert it to fahrenheit and output "NN°C is NN°F".
// - Create a function called fahrenheitToCelsius:
//
// Now store a fahrenheit temperature into a variable.
// - Convert it to celsius and output "NN°F is NN°C."
