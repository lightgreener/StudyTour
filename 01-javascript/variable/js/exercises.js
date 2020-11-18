console.log("is this on");


//Store the following into variables: number of children, partner's name,
//geographic location, job title.
//Output your fortune to the screen like so:
// "You will be a X in Y, and married to Z with N kids."

const fatherName = "Nick";
const motherName = "mellisa";
const numChildren = 3;
const address = "Sydney";
const jobTitle = "artist";

let output = "you will be a "+jobTitle+ " in "+address+", and married to "+motherName+" with "+numChildren+" kids.";
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
let output4 = "the circumference is ";
