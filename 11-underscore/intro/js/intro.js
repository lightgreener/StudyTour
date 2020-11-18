console.log(_.VERSION);

const nums = [1,2,4,5,6,7,8];

//.each


const obj = {
    'Jan': 15,
    'Feb': 38,
    'Mar': 35
};

//.map()  lets you create new arrays from old  arrays
console.log(nums);
const byNineteen = function (x) {
    return x * 19;
};

const nineteenTimes = _(nums).map(byNineteen);
    console.log(nineteenTimes);


const salesInfo = _(obj).map(function (sales, month){
    return `${month} had ${sales} sales`;
});


//.reduce .  works for objects
const total = _(nums).reduce(function (runningTotal, n){
    console.log(`runningTotal : ${runningTotal}, and n is ${ n };`);
    return  runningTotal + n;
});
console.log(total);

// find()
const divisibleByFive = function (candidate) {
    return candidate % 5 === 0
};

// const firstMultipleOfFive = _(nums).find(function (candidate) {
//     return candidate % 5 === 0;
// });
const firstMultipleOfFive = _(nums).find(divisibleByFive);
console.log(firstMultipleOfFive);

// filter ()


// reject()
const allMultiplesOfFive = _(nums).reject(divisibleByFive);

// pluck ()
const bros = [
  {name: 'Groucho', instrument: 'guitar', disposition: 'surly'},
  {name: 'Harpo', instrument: 'harp', disposition: 'sweet'},
  {name: 'Chico', instrument: 'piano', disposition: 'sleazy'},
];

console.log( _(bros).pluck('disposition') );

/////////////////////
// test
var numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

var people = [
  { id: 1, username: "A", active: true,  age: 20, uid: 1412 },
  { id: 2, username: "B", active: false, age: 35, uid: 1352 },
  { id: 3, username: "C", active: false, age: 50, uid: 5418 },
  { id: 4, username: "D", active: true,  age: 65, uid: 216  },
  { id: 5, username: "E", active: true,  age: 80, uid: 18   },
  { id: 6, username: "E", active: true,  age: 95, uid: 1000 },
];

var words = [
  "attoparsec", "batch", "Cinderalla Book", "Dr. Fred Mbogo", "eat flaming death", "fandango on core", "Foonly", "goat file", "Halloween Documents", "I see no X here", "Imminent Death Of The Net Predicted!", "jibble", "kilogoogle", "larval stage", "maximum Maytag mode", "nybble", "octal forty", "pico-", "quantum bogodynamics", "rubber-hose cryptanalysis", "sigmonster", "tail recursion", "unswizzle", "VAXen", "webmaster", "XEROX PARC", "yak shaving", "Zero-One-Infinity Rule"
]; // Random words from here... http://www.catb.org/jargon/html/go01.html

// 1
console.log(_(people).indexBy('uid'));

// 2

-(words).
