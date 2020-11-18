// callbacks review

//  a callback function is a function passed to another funttion
//  which calls that function for you,

//  js is asynchronous

// Timers
console.log('A');
setTimeout (function () {
    console.log('B : time has passed');
}, 3000)

console.log('C');
// JQuery's Document ready
console.log('I');
$(document).ready (function () {
    console.log('the Document is ready');
} );
console.log('III');

// Event handler
$(document).on('click', function(){
   console.log('click');
});

//  hard to understand
const colors = ['red','orange','yellow','green','blue','indigo','violet'];

// colors.each do |c|
//     puts c
// end

const each = function (someArray, callbackFunction(){
    for (let i=0;i<someArray.length; i++){
        callbackFunction(someArray[i]);
    }
});

each (colors, function(c){
    console.log(c);
});
