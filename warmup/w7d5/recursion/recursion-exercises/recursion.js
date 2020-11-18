// Write code inside the functions
// You will have to figure out what parameters to include
// All functions must use recursion

// function findMax( array, largest=array[0] ){
//  上面也可以，
    function findMax( array, largest=-Infinity ){

    // This function returns the largest number in a given array.
    // let max = array[0];
    // for (var i = 1; i < array.length; i++) {
    //     if (array[i] > max) {
    //         max = array[i]
    //     }
    // }
    // if (array.length === 1){
    //     return array[array.length - 1];
    // }else {
    //     let max = array[array.length - 1];
    //     if (array[array.length - 1] < array[array.length]) {
    //         max = array[array.length];
    //     }
    // }

    // if the array is empty , return the largest

    if (array.length === 0) {
        return largest;
    }
    // check if the first value is larger than anything
    //  save the larger
    if (array[0] > largest) {
        largest = array[0];
    }

    const rest = array.slice(1);

    return findMax( rest, largest);

}

function factorial( n ){
    // This function returns the factorial of a given number.
    if (n <= 1 ){
        return 1;
    }else {
        return n * factorial (n -1)
    }
}

return (n<=1)? 1 : n * factorial(n -1);

function fibonacci(){
    // This function returns the Nth number in the fibonacci sequence.
    // https://en.wikipedia.org/wiki/Fibonacci_number
    // For this function, the first two fibonacci numbers are 1 and 1
}

function coinFlips( tosses){
    // This function returns an array of all possible outcomes from flipping a coin N times.
    // Input type: Integer
    // For example, coinFlips(2) would return the following:
    // ["HH", "HT", "TH", "TT"]
    // H stands for Heads and T stands for tails
    // Represent the two outcomes of each flip as "H" or "T"
    const combinations = [];

    const flip = function ( soFar="") {
        if (soFar.length === tosses) {
            combinations.push( soFar );
        }else {
        flip(soFar + "H");
        flip(soFar + "T");
        }
    }
    flip();
    return combinations;
}

function letterCombinations(){
    // This function returns an array of all combinations of the given letters
    // Input type: Array of single characters
    // For example, letterCombinations(["a","b","c"]) would return the following:
    // ["a","b","c","ab","ac","ba","bc","ca","cb","abc","acb","bac","bca","cab","cba"]
}

module.exports = {
    findMax,
    factorial,
    fibonacci,
    coinFlips,
    letterCombinations
}
