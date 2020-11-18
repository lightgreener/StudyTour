const catFactory = function (n, a, f) {
    const cat = {};
    cat.name = n;
    cat.age =  a;
    cat.furColor = f;
    return cat;
}

//it should be array
const cuteCats = [
    catFactory ('Angel', 12, 'red'),
    catFactory ('Evil', 34, 'blue'),
    catFactory ('Beast', 22, 'pink')
];

for (var i = 0; i < cuteCats.length; i++) {
    const kitty = cuteCats[i];
    console.log(`${ kitty.name } is ${ kitty.furColor } fur`);
}
console.log(cuteCats[0].name);
