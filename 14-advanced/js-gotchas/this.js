// this lets us access the current object inside a method without nneding to kenow the variable name

const groucho = {
    fullname: 'Groucho Marx',
    greeting: function(){
        return 'gooday, my name is '+ this.fullname;
    }
}

console.log('method/bound',groucho.greeting());    // method

const unboundGreeting = groucho.greeting;  // is no long method
console.log('function/unbound', unboundGreeting());

const boundGreeting = groucho.greeting.bind(groucho);  // make groucho 'this' permanently
console.log('bind', boundGreeting());



// call()  one time use

// apply()
