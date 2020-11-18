// # Exercises: if/else statements
//
// ## What number's bigger?
//
// Write a function named greaterNum that:
// - takes 2 arguments, both numbers.
// - returns whichever number is the greater (higher) number.
// - Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").
//
console.log("it is a good day");

const greaterNum= function (num1,num2){
    let number;

    if(num1 === num2){
      return "both are the same";
    }else if(num1>num2){
      return number=num1;
    }else{
      return number =num2;
    }
}



const greater = greaterNum(122, 122);
console.log(greater);
const greater1 = greaterNum(12, 47);
console.log(greater1);
const greater2 = greaterNum(44, 2);
console.log(greater2);


// ## The World Translator
//
// Write a function named helloWorld that:
// - takes 1 argument, a language code (e.g. "es", "de", "en")
// - returns "Hello, World" for the given language, for atleast 3 languages. It should
 // default to returning English.
// - Call that function for each of the supported languages and log the result to make
 // sure it works.
//

const helloWorld = function (lan){
  if(lan === "es"){
    return "Saluton mondo";
  } else if (lan === "ch"){
    return "你好";
  } else {
    return "hello, World";
  }

}

const language= helloWorld("es");
console.log(language);
const language1= helloWorld("ch");
console.log(language1);
const language2= helloWorld("r");
console.log(language2);




// ## The Grade Assigner
//
// Write a function named assignGrade that:
// - takes 1 argument, a number score.
// - returns a grade for the score, either "A", "B", "C", "D", or "F".
// - Call that function for a few different scores and log the result to make sure it works.
//

const assignGrade =function(score){
  if(score>0 && score<100){
    if (score>=90) {
      return "A";
    }
    else if (score>=80) {
      return "B";
    }
    else if (score>=70) {
      return "C";
    }
    else if (score>=60) {
      return "D";
    }else {
      return "F";
    }

  }
  return "out of range";
}

const grade1 = assignGrade(99);
console.log(grade1);
const grade2 = assignGrade(37);
console.log(grade2);
const grade3 = assignGrade(78);
console.log(grade3);
const grade4 = assignGrade(100);
console.log(grade4);



// ## The Pluralizer
//
// Write a function named pluralize that:
// - takes 2 arguments, a noun and a number.
// - returns the number and pluralized form, like "5 cats" or "1 dog".
// - Call that function for a few different scores and log the result to make sure it works.
// - Bonus: Make it handle a few collective nouns like "sheep" and "geese".
