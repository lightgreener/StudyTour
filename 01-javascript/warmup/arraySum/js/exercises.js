
console.log('It is a great day');
// # Sum of arrays

// Write a function that receives two arguments, both of which are Arrays and sums them. These arrays contain only numbers.
// You don't know their length and they can contain both integers and floating point numbers.

// ## Example

// [2, 6.4, 3] + [3, 3.6, 2] = 20
// sum([2, 6.4, 3], [3, 3.6, 2]) => 20

const addArray = function ( arr ) {
    let total = 0;
    for (let i = 0; i< arr.length; i++) {
        const element = arr[i];
        if (element!= NaN ) {
            total += element;
        }
    }
    return total;
}

const sumArrays = function (arr1, arr2) {
        const sum = addArray(arr1) + addArray(arr2);
        return sum;
}
const array1 = [1,3,6,4.6];
const array2 = [65,7,88,4.6];
console.log(sumArrays(array1,array2));

// teacher did
const arrSum = function (arr1, arr2) {
	let sum = 0;

    for (let i = 0; i < arr1.length; i++) {
		sum += arr1[i];
	}

    for (let i = 0; i < arr2.length; i++) {
		sum += arr2[i];
	}

    return sum;
};

// console.log(arrSum([2, 6.4, 3], [3, 3.6, 2]));



// BONUS:

const arrMultiSum = function() {
	let sum = 0;

    for (let i = 0; i < arguments.length; i++) {
        for (let j = 0; j < arguments[i].length; j++) {
			     sum += arguments[i][j];
		    }
  	}

    return sum;
};

console.log(arrMultiSum([2, 6.4, 3], [3, 3.6, 2], [2, 6.4, 3], [3, 3.6, 2]));
