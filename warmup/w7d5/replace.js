// let input = ;

const myInput = "'this is a brown fox', 'o,$'";

const newArray = myInput.split('');

for (var i = 0; i < newArray.length; i++) {
        if (newArray[i] === 'o') {
            newArray[i] = "$";
        }
}

const newString = newArray.join('');
console.log(newString);
